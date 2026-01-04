import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import type { ReglementConfig } from "../types/config";
import expressions from "docxtemplater/expressions.js";

export const generateDocument = async (config: ReglementConfig) => {
  try {
    // Fetch template from public folder (BASE_URL handles subdirectory deployment)
    const response = await fetch(`${import.meta.env.BASE_URL}template.docx`);
    if (!response.ok) {
      throw new Error(`Could not fetch template: ${response.statusText}`);
    }
    const content = await response.arrayBuffer();
    const zip = new PizZip(content);

    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
      parser: expressions,
      syntax: {
        allowUnopenedTag: true,
        allowUnclosedTag: true,
      },
    });

    // Add calculated/helper fields for template
    const templateData = {
      ...config,
      tieBreaker: {
        ...config.tieBreaker,
        isExAequo: config.tieBreaker.primary === 'ex_aequo_control',
        isRegularity: config.tieBreaker.primary === 'regularity_test',
        isHeaviestSection: config.tieBreaker.secondary === 'heaviest_section',
        isOldestCar: config.tieBreaker.secondary === 'oldest_car',
      },
      routeRules: {
        ...config.routeRules,
        isLegendInAppendix: config.routeRules.legendLocation === 'appendix',
        isLegendInRoutebook: config.routeRules.legendLocation === 'routebook',
      },
    };

    doc.render(templateData);

    const out = doc.getZip().generate({
      type: "blob",
      mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });

    saveAs(out, `Reglement-${config.event.name || "Concept"}.docx`);
  } catch (error: unknown) {
    console.error("=== Document Generation Error ===");
    console.error("Full error object:", error);

    const docxError = error as { properties?: { errors?: Array<{ name: string; message: string; properties: unknown }> } };
    if (docxError?.properties?.errors) {
      console.error("Docxtemplater errors:");
      docxError.properties.errors.forEach((e, index) => {
        console.error(`\nError ${index + 1}:`, {
          name: e.name,
          message: e.message,
          properties: e.properties,
        });
      });
    }

    // Don't show alert, just log to console for inspection
    throw error;
  }
};
