# AI Ninjas - Brand Reference Guide

## Brand Information

**Company:** AI Ninjas  
**Website:** [https://aininjas.pro](https://aininjas.pro)  
**Brand Color:** Orange (#FF8300)  
**Tag Line:** "Powering the Future with Intelligent Solutions"

## Logo Display

The AI Ninjas logo/text should be displayed with a pulsating orange glow effect when possible. In the Contractor Growth Systems website, this is implemented using:

```tsx
// Enhanced pulsating effect component for AI Ninjas branding
const PulsatingText = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block">
    <span className="text-orange-500 font-bold text-base animate-[pulse_1.5s_ease-in-out_infinite]">{children}</span>
    <span className="absolute inset-0 bg-orange-400/40 blur-md rounded-md animate-[pulse_1.5s_ease-in-out_infinite]" />
  </span>
);
```

## Website Integration

The AI Ninjas credit should appear:
- In the footer, directly under the "Contact Us" heading
- With the text "Powered by AI Ninjas" where "AI Ninjas" uses the pulsating effect
- Linked to the AI Ninjas website (https://aininjas.pro)

## Services Overview

AI Ninjas specializes in:

1. **Custom AI Development**
   - Chatbots and virtual assistants
   - Intelligent automation solutions
   - AI-powered data analysis

2. **Website & Application Enhancement**
   - Integration of AI capabilities into existing websites
   - Intelligent search and recommendation systems
   - User experience optimization through AI

3. **AI Consulting**
   - AI strategy development
   - Implementation roadmaps
   - ROI analysis for AI initiatives

## Contact Information

For partnership opportunities or service inquiries, contact AI Ninjas at:
- **Email:** info@aininjas.pro
- **Website Contact Form:** [https://aininjas.pro/contact](https://aininjas.pro/contact)

## Usage Guidelines

- Always display the "AI Ninjas" name with the pulsating orange effect when technically feasible
- Maintain the linkage to the AI Ninjas website when using the name
- Use the phrase "Powered by AI Ninjas" in attribution contexts
- Avoid altering the brand colors or visual representation without approval 