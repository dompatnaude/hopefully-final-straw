export type PackSize = {
  sizeMg: number;
  pricePerUnit: number;
};

export type Product = {
  slug: string;
  name: string;
  shortCategory: string;
  casNumber: string;
  sequence: string;
  purity: string;
  form: string;
  storage: string;
  category: string;
  description: string;
  researchApplications: string[];
  packSizes: PackSize[];
  coaAvailable: boolean;
  sdsAvailable: boolean;
};

// Catalog: lyophilized research peptides only. No prescription-only drugs
// (e.g. tesamorelin, bremelanotide/PT-141, hCG), no pre-mixed "blends",
// no reconstitution kits. Priced and packaged as laboratory reagents.
export const products: Product[] = [
  {
    slug: "bpc-157-acetate",
    name: "BPC-157 Acetate",
    shortCategory: "Tissue Repair",
    casNumber: "137525-51-0",
    sequence: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val",
    purity: "≥98% (HPLC)",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    category: "Gastrointestinal / tissue repair research",
    description:
      "A synthetic pentadecapeptide fragment studied in preclinical models of gastrointestinal protection and tissue repair pathways.",
    researchApplications: [
      "Angiogenesis pathway studies",
      "GI mucosal protection models",
      "In vitro tendon/ligament fibroblast assays",
    ],
    packSizes: [{ sizeMg: 10, pricePerUnit: 420 }],
    coaAvailable: true,
    sdsAvailable: true,
  },
  {
    slug: "thymosin-beta-4",
    name: "Thymosin Beta-4 Acetate",
    shortCategory: "Tissue Repair",
    casNumber: "77591-33-4",
    sequence: "Ac-SDKPDMAEIEKFDKSKLKKTETQEKNPLPSKETIEQEKQAGES",
    purity: "≥98% (HPLC)",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    category: "Cell migration / wound-healing research",
    description:
      "An actin-sequestering peptide widely used in cell migration and cytoskeletal dynamics research.",
    researchApplications: [
      "Actin polymerization assays",
      "Cell migration and chemotaxis studies",
      "In vitro wound-healing models",
    ],
    packSizes: [{ sizeMg: 10, pricePerUnit: 480 }],
    coaAvailable: true,
    sdsAvailable: true,
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu (Copper Tripeptide-1)",
    shortCategory: "Dermal & ECM",
    casNumber: "89030-95-5",
    sequence: "Gly-His-Lys · Cu²⁺ complex",
    purity: "≥99% (HPLC)",
    form: "Lyophilized powder",
    storage: "-20°C, protect from light",
    category: "Dermal / extracellular matrix research",
    description:
      "A copper-binding tripeptide studied for its role in collagen synthesis and extracellular matrix remodeling in dermal fibroblast models.",
    researchApplications: [
      "Fibroblast collagen synthesis assays",
      "Extracellular matrix remodeling studies",
      "Antioxidant pathway research",
    ],
    packSizes: [{ sizeMg: 10, pricePerUnit: 95 }],
    coaAvailable: true,
    sdsAvailable: true,
  },
  {
    slug: "semax",
    name: "Semax (N-Acetyl)",
    shortCategory: "Neuropharmacology",
    casNumber: "80714-61-0",
    sequence: "Ac-Met-Glu-His-Phe-Pro-Gly-Pro",
    purity: "≥98% (HPLC)",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    category: "Neuropharmacology research",
    description:
      "A synthetic ACTH(4-10) analog studied in neuropharmacology literature for effects on BDNF expression in animal models.",
    researchApplications: [
      "BDNF expression assays",
      "Rodent cognition/behavior models",
      "Neurotrophic pathway studies",
    ],
    packSizes: [{ sizeMg: 10, pricePerUnit: 150 }],
    coaAvailable: true,
    sdsAvailable: true,
  },
  {
    slug: "selank",
    name: "Selank",
    shortCategory: "Neuropharmacology",
    casNumber: "129954-34-3",
    sequence: "Thr-Lys-Pro-Arg-Pro-Gly-Pro",
    purity: "≥98% (HPLC)",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    category: "Neuropharmacology research",
    description:
      "A synthetic heptapeptide analog of tuftsin studied in preclinical anxiolytic and immunomodulatory research.",
    researchApplications: [
      "Rodent anxiety-model behavioral assays",
      "Cytokine expression studies",
      "GABAergic pathway research",
    ],
    packSizes: [{ sizeMg: 10, pricePerUnit: 145 }],
    coaAvailable: true,
    sdsAvailable: true,
  },
  {
    slug: "epitalon",
    name: "Epitalon",
    shortCategory: "Cellular Senescence",
    casNumber: "307297-39-8",
    sequence: "Ala-Glu-Asp-Gly",
    purity: "≥98% (HPLC)",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    category: "Cellular senescence research",
    description:
      "A synthetic tetrapeptide studied in the geroprotector/telomerase-activity research literature.",
    researchApplications: [
      "Telomerase activity assays",
      "Cellular senescence models",
      "Pineal gland function studies",
    ],
    packSizes: [{ sizeMg: 10, pricePerUnit: 78 }],
    coaAvailable: true,
    sdsAvailable: true,
  },
  {
    slug: "ss-31",
    name: "SS-31 (Mitochondria-Targeted Research Peptide)",
    shortCategory: "Mitochondrial",
    casNumber: "736992-21-5",
    sequence: "D-Arg-Dmt-Lys-Phe-NH2",
    purity: "≥98% (HPLC)",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    category: "Mitochondrial bioenergetics research",
    description:
      "A cell-permeable aromatic-cationic tetrapeptide studied for cardiolipin interactions in mitochondrial bioenergetics research.",
    researchApplications: [
      "Mitochondrial membrane potential assays",
      "Reactive oxygen species (ROS) studies",
      "Cardiolipin-binding research",
    ],
    packSizes: [{ sizeMg: 10, pricePerUnit: 165 }],
    coaAvailable: true,
    sdsAvailable: true,
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    shortCategory: "Mitochondrial",
    casNumber: "1627580-64-6",
    sequence: "Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg",
    purity: "≥98% (HPLC)",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    category: "Mitochondrial-derived peptide research",
    description:
      "A mitochondrial-DNA-encoded peptide studied in metabolic regulation and AMPK pathway research.",
    researchApplications: [
      "AMPK activation assays",
      "Metabolic regulation studies",
      "Skeletal muscle cell models",
    ],
    packSizes: [{ sizeMg: 10, pricePerUnit: 175 }],
    coaAvailable: true,
    sdsAvailable: true,
  },
  {
    slug: "kisspeptin-10",
    name: "Kisspeptin-10",
    shortCategory: "Endocrinology",
    casNumber: "274901-16-5",
    sequence: "Tyr-Asn-Trp-Asn-Ser-Phe-Gly-Leu-Arg-Phe-NH2",
    purity: "≥98% (HPLC)",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    category: "Reproductive endocrinology research",
    description:
      "The bioactive decapeptide fragment of kisspeptin, used in reproductive endocrinology and GnRH pathway research models.",
    researchApplications: [
      "GnRH neuron signaling studies",
      "In vitro receptor-binding assays",
      "Reproductive axis research models",
    ],
    packSizes: [{ sizeMg: 10, pricePerUnit: 155 }],
    coaAvailable: true,
    sdsAvailable: true,
  },
  {
    slug: "igf-1-lr3",
    name: "IGF-1 LR3",
    shortCategory: "Growth Factors",
    casNumber: "946870-92-4",
    sequence: "Long R3 IGF-1, 83 amino acid recombinant analog",
    purity: "≥98% (HPLC)",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    category: "Cell culture growth factor",
    description:
      "A recombinant analog of IGF-1 with extended in vitro bioactivity, used as a growth-factor supplement in cell culture research.",
    researchApplications: [
      "Cell proliferation assays",
      "Myoblast differentiation studies",
      "Serum-free media supplementation",
    ],
    packSizes: [{ sizeMg: 10, pricePerUnit: 2450 }],
    coaAvailable: true,
    sdsAvailable: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
