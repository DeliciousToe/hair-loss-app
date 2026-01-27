export const PROTOCOLS = {
    PREVENTION: {
        id: "prevention",
        title: "Maintenance & Prevention",
        description: "Ideal for early signs of hair loss or proactive maintenance. Focuses on scalp health and nutrient support.",
        products: ["Multivitamin (Biotin, Vit D)", "Ketoconazole Shampoo", "Scalp Massager"],
        schedule: {
            daily: [
                { task: "Morning: Take Multivitamin with Biotin & Vitamin D", type: "supplement" },
                { task: "Evening: Scalp Massage (5 mins) to improve blood flow", type: "manual" }
            ],
            weekly: [
                { task: "Use Ketoconazole Shampoo (leave on for 5 mins)", type: "wash", frequency: "2x per week (e.g., Wed, Sun)" },
                { task: "Optional: Dermarolling (0.5mm) for absorption", type: "device", frequency: "1x per week" }
            ]
        }
    },
    REGROWTH: {
        id: "regrowth",
        title: "Regrowth & Density",
        description: "Targeted for visible recession and thinning. Introduces growth stimulants and collagen induction.",
        products: ["Minoxidil 5%", "Dermaroller (1.0mm-1.5mm)", "Biotin & Zinc", "Ketoconazole Shampoo"],
        schedule: {
            daily: [
                { task: "Morning: Apply Minoxidil 5% (1ml) to dry scalp", type: "topical" },
                { task: "Morning: Take Hair Growth Supplements (Biotin, Zinc)", type: "supplement" },
                { task: "Evening: Apply Minoxidil 5% (1ml) - 4 hours before bed", type: "topical" }
            ],
            weekly: [
                { task: "Dermarolling (1.0mm - 1.5mm) - Apply medium pressure", type: "device", frequency: "1x per week (e.g., Sunday)" },
                { task: "Use Ketoconazole Shampoo", type: "wash", frequency: "2x per week" }
            ],
            note: "IMPORTANT: Skip Minoxidil for 24 hours after Dermarolling to prevent systemic absorption and irritation."
        }
    },
    AGGRESSIVE: {
        id: "aggressive",
        title: "Aggressive Restoration",
        description: "For advanced hair loss (Crown Balding / Deep Recession). Combines maximum growth stimulation with hormonal defense strategy.",
        products: ["Minoxidil 5%", "Dermaroller (1.5mm)", "DHT Blocker Support", "Doctor Consultation (Finasteride)"],
        schedule: {
            daily: [
                { task: "Morning: Apply Minoxidil 5% (1ml)", type: "topical" },
                { task: "Morning: Take Supplements & Natural DHT Blockers (e.g., Saw Palmetto)", type: "supplement" },
                { task: "Evening: Apply Minoxidil 5% (1ml)", type: "topical" },
                { task: "Consult Doctor about Finasteride (1mg daily)", type: "medical" }
            ],
            weekly: [
                { task: "Dermarolling (1.5mm) on thinning areas", type: "device", frequency: "1x per week" },
                { task: "Use Ketoconazole Shampoo", type: "wash", frequency: "2-3x per week" }
            ],
            note: "IMPORTANT: Skip Minoxidil for 24 hours after Dermarolling. Finasteride is a prescription medication - consult a doctor before use."
        }
    }
};

export const determineProtocol = (answers) => {
    // answers: { age, familyHistory, hairline, crown, density }
    let score = 0;

    // Age factor (Younger with hair loss = more aggressive usually needed, but for safety lets stick to severity)

    // Hairline
    if (answers.hairline === 'mild') score += 1;
    if (answers.hairline === 'deep') score += 2;

    // Crown
    if (answers.crown === 'thinning') score += 2;
    if (answers.crown === 'bald') score += 3;

    // Density
    if (answers.density === 'thin') score += 1;
    if (answers.density === 'very_thin') score += 2;

    // Family History (Genetic predisposition)
    if (answers.familyHistory === 'yes') score += 1;

    if (score <= 2) return PROTOCOLS.PREVENTION;
    if (score <= 5) return PROTOCOLS.REGROWTH;
    return PROTOCOLS.AGGRESSIVE;
};
