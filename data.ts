import { FlowData } from './types';

export const CLINIC_DATA: FlowData = {
  initialNodeId: 'intro',
  nodes: {
    intro: {
      id: 'intro',
      type: 'intro',
      title: 'Understanding skin lumps and bumps',
      content: 'Finding a lump or bump can be worrying, but many are common and harmless. We can walk through a few questions to help you understand the patterns we typically see. This information is for general awareness and does not replace a professional medical consultation.',
      startButtonText: 'Let’s begin',
      nextId: 'q_motivation'
    },
    
    // --- STAGE 1: CONTEXT ---
    
    q_motivation: {
      id: 'q_motivation',
      type: 'question',
      stageLabel: 'Background',
      educationalContext: 'Knowing whether a lump is new or has been there for years helps distinguish between routine findings and things that might need a closer look.',
      questionText: 'Which of these best describes the situation?',
      options: [
        { id: 'opt_new', label: 'I noticed a new lump recently', nextId: 'q_location' },
        { id: 'opt_existing', label: 'I’ve had this for a while', nextId: 'q_location' },
        { id: 'opt_changing', label: 'Something old has started to change', nextId: 'q_symptoms_check' }
      ]
    },

    q_symptoms_check: {
      id: 'q_symptoms_check',
      type: 'question',
      stageLabel: 'Observations',
      educationalContext: 'Most benign cysts are generally quiet. Rapid changes like redness or swelling are often signs of inflammation—the body’s reaction to the area.',
      questionText: 'What kind of change have you noticed?',
      options: [
        { id: 'opt_redness', label: 'It has become red, hot, or tender', nextId: 'out_inflammation' },
        { id: 'opt_size', label: 'It is slowly getting bigger', nextId: 'q_location' },
        { id: 'opt_discharge', label: 'It has leaked fluid', nextId: 'out_inflammation' }
      ]
    },

    // --- STAGE 2: ANATOMY ---

    q_location: {
      id: 'q_location',
      type: 'question',
      stageLabel: 'Anatomy',
      educationalContext: 'The location is often a strong clue. The scalp, for example, has specific hair follicles that produce different types of cysts compared to the skin on the back or face.',
      questionText: 'Where on the body is this located?',
      options: [
        { id: 'opt_scalp', label: 'Scalp or head', description: 'Under the hair or on the forehead', nextId: 'q_scalp_feel' },
        { id: 'opt_face', label: 'Face, neck, or ears', description: 'Visible areas of skin', nextId: 'q_face_detail' },
        { id: 'opt_body', label: 'Torso, back, or shoulders', description: 'Thicker skin areas', nextId: 'q_mobility' },
        { id: 'opt_limbs', label: 'Arms or legs', nextId: 'q_mobility' }
      ]
    },

    // --- STAGE 3: CHARACTERISTICS ---

    // Branch: Scalp
    q_scalp_feel: {
      id: 'q_scalp_feel',
      type: 'question',
      stageLabel: 'Characteristics',
      educationalContext: 'On the scalp, texture is key. A cyst is a fluid-filled sac, often feeling firm like a grape, whereas fatty tissue usually feels softer.',
      questionText: 'When gently pressed, how does it feel?',
      options: [
        { id: 'opt_firm', label: 'Firm, smooth, and resilient', description: 'Like a small pebble or grape', nextId: 'out_pilar_pattern' },
        { id: 'opt_soft', label: 'Soft, squishy, or doughy', description: 'Flattens easily under pressure', nextId: 'out_lipoma_pattern' }
      ]
    },

    // Branch: Face
    q_face_detail: {
      id: 'q_face_detail',
      type: 'question',
      stageLabel: 'Details',
      educationalContext: 'Some cysts maintain a connection to the surface skin. A small visible pore or "punctum" is a classic sign of this connection.',
      questionText: 'Looking closely in a mirror, is there a small dark pore in the center?',
      options: [
        { id: 'opt_punctum', label: 'Yes, there is a small central point', nextId: 'out_epidermoid_pattern' },
        { id: 'opt_smooth', label: 'No, the skin over it looks smooth', nextId: 'q_mobility' }
      ]
    },

    // Branch: General
    q_mobility: {
      id: 'q_mobility',
      type: 'question',
      stageLabel: 'Characteristics',
      educationalContext: 'We check "mobility" to see where the lump sits. Lumps that move with the skin are usually in the upper layers, while those that slide underneath are often in the fat layer below.',
      questionText: 'Does it move when you try to wiggle it?',
      options: [
        { id: 'opt_moves_skin', label: 'It moves with the skin', description: 'It feels embedded in the surface layer', nextId: 'out_epidermoid_pattern' },
        { id: 'opt_moves_under', label: 'It slides underneath the skin', description: 'The skin glides over the top of it', nextId: 'out_lipoma_pattern' },
        { id: 'opt_fixed', label: 'It feels fixed in place', description: 'It doesn’t really move much', nextId: 'out_fixed_pattern' }
      ]
    },

    // --- OUTCOMES ---

    out_pilar_pattern: {
      id: 'out_pilar_pattern',
      type: 'outcome',
      title: 'About this pattern: The Scalp Nodule',
      summary: 'A firm, resilient lump on the scalp is a specific combination very commonly associated with the Pilar Cyst pattern.',
      physiology: 'These form from the root sheath of hair follicles. Since the scalp is rich in robust hair follicles, this is their most common location. The sac fills with skin protein (keratin), which gives them that firm, smooth feeling.',
      medicalContext: [
        'They often run in families (hereditary).',
        'It is not unusual to find more than one.',
        'They have a sturdy wall, making them distinct from other cysts.'
      ],
      commonQuestions: [
        { q: 'Why do I have them?', a: 'Pilar cysts are strongly genetic (autosomal dominant), meaning they run in families.' },
        { q: 'Will hair grow back after removal?', a: 'Generally, yes. While scar tissue itself doesn’t grow hair, the incision line is typically very fine and hidden by surrounding hair.' },
        { q: 'Do they go away on their own?', a: 'No. Because there is a physical sac structure, they persist and often grow slowly over time unless removed.' }
      ],
      treatmentOptions: [
        'Surgical excision (removing the sac intact)',
        'Minimal incision extraction',
        'Local anaesthetic procedure'
      ],
      managementInfo: 'We typically assess these if they become bothersome or for confirmation. Many people choose to monitor them if they are small and painless.'
    },

    out_epidermoid_pattern: {
      id: 'out_epidermoid_pattern',
      type: 'outcome',
      title: 'About this pattern: The Surface Connection',
      summary: 'The detail about the central pore (punctum) or the lump feeling embedded "in" the skin is a classic sign of an Epidermoid Cyst pattern.',
      physiology: 'These occur when surface skin cells tuck themselves deeper into the skin instead of shedding. They form a little pocket that fills with keratin. That small pore is the original connection to the surface.',
      medicalContext: [
        'These are the most common type of skin cyst.',
        'They can change size, swelling up and calming down.',
        'They are contained within a thin sac wall.'
      ],
      commonQuestions: [
        { q: 'Why does it sometimes smell?', a: 'The content is wet, degrading skin protein (keratin), which can have a cheesy odour if it leaks.' },
        { q: 'Can I squeeze it?', a: 'We strongly recommend against squeezing. It risks rupturing the thin wall internally, pushing contents into the tissue and causing intense inflammation.' },
        { q: 'Will it come back after removal?', a: 'Only if the sac is not completely removed. Professional excision aims to remove the entire sac wall to prevent recurrence.' }
      ],
      treatmentOptions: [
        'Complete surgical excision',
        'Antibiotics (only if infection is present)',
        'Incision and drainage (for acute inflammation only)'
      ],
      managementInfo: 'As these are benign, doing nothing is a valid option if it doesn’t bother you. However, if a cyst becomes red, hot, or painful, it suggests inflammation, and medical advice is recommended.'
    },

    out_lipoma_pattern: {
      id: 'out_lipoma_pattern',
      type: 'outcome',
      title: 'About this pattern: Soft Tissue',
      summary: 'A lump that feels soft, doughy, and slips around easily under your fingers often points towards a Lipoma pattern rather than a cyst.',
      physiology: 'Unlike a cyst, which is a fluid-filled sac, a lipoma is a collection of fat cells that have clustered together. They sit in the fat layer just beneath the skin, which is why they feel so mobile.',
      medicalContext: [
        'They are extremely common, especially on the torso and arms.',
        'They are typically slow-growing and painless.',
        'They are solid tissue, not fluid.'
      ],
      commonQuestions: [
        { q: 'Can weight loss make it go away?', a: 'Typically no. Lipoma fat cells are metabolically different from normal body fat and don’t usually shrink with diet or exercise.' },
        { q: 'Is it dangerous?', a: 'Lipomas are benign growths of fat tissue. They are not cancerous and do not turn into cancer.' },
        { q: 'Is removal difficult?', a: 'Most small lipomas are easily removed under local anaesthetic. Larger or deeper ones may require more planning.' }
      ],
      treatmentOptions: [
        'Surgical excision',
        'Liposuction (selected cases)',
        'Monitoring (no action)'
      ],
      managementInfo: 'Most people choose to leave lipomas alone unless they become large, unsightly, or press on a nerve. Monitoring them for changes is the standard approach.'
    },

    out_inflammation: {
      id: 'out_inflammation',
      type: 'outcome',
      title: 'Current Status: Inflammation',
      summary: 'Redness, heat, or pain suggests the area is currently inflamed. This often happens if a cyst has ruptured or is reacting to pressure.',
      physiology: 'When the wall of a cyst breaks, the contents leak into the surrounding tissue. The body sees this as "foreign" material and launches an immune response to clean it up—causing redness and swelling.',
      medicalContext: [
        'This is often sterile inflammation, not necessarily an infection.',
        'It can be very tender to the touch.',
        'The "sac" is hard to remove while the area is active.'
      ],
      commonQuestions: [
        { q: 'Can you remove the cyst right now?', a: 'Usually, no. During inflammation, the cyst wall is fragile and mushy. Surgeons typically wait for it to calm down to ensure the whole sac can be removed intact.' },
        { q: 'Do I need antibiotics?', a: 'Often yes, especially if there is spreading redness or heat, to prevent secondary bacterial infection.' },
        { q: 'How long does it take to settle?', a: 'It can take a few weeks for the body to clear the inflammation, even with treatment.' }
      ],
      treatmentOptions: [
        'Warm compresses',
        'Course of antibiotics',
        'Incision and drainage (for pressure relief)',
        'Delayed elective excision (once calm)'
      ],
      managementInfo: 'Because the area is active and uncomfortable, this is a pattern where we generally recommend seeing a professional to decide the best way to calm it down.'
    },

    out_fixed_pattern: {
      id: 'out_fixed_pattern',
      type: 'outcome',
      title: 'About this pattern: Deep or Fixed',
      summary: 'Lumps that feel firmly attached or don’t move when you push them fall into a different category than the mobile cysts we often see.',
      physiology: 'Fixity can mean the lump is originating from deeper tissues, or it might be held in place by scar tissue or inflammation.',
      medicalContext: [
        'It’s harder to determine what these are without an exam.',
        'They are often benign, but they don’t follow the simple "cyst" rules.',
        'Ultrasound is sometimes helpful to see what’s going on.'
      ],
      commonQuestions: [
        { q: 'Does "fixed" mean it is dangerous?', a: 'Not necessarily. Many deep lumps are just deep lipomas or fibromas. However, because we can’t feel the edges easily, we take extra care to check them.' },
        { q: 'What happens next?', a: 'Doctors will typically perform a physical exam and may order an ultrasound scan to see what lies beneath the surface.' }
      ],
      treatmentOptions: [
        'Ultrasound or MRI imaging',
        'Biopsy sampling',
        'Surgical referral'
      ],
      managementInfo: 'For peace of mind, the standard advice for any lump that feels hard or stuck in place is to have it checked by a doctor.'
    }
  }
};