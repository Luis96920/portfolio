import { Project } from ".";

export const projects: Project[] = [
  {
    title: "Zetabot",
    description:
      "Zetabot is a versatile AI chatbot that optimizes customer support operations, reducing costs by up to 60%. With 24/7 instant assistance and personalized interactions, businesses can enhance efficiency, productivity, and customer trust.",
    features: [
      " Automating repetitive tasks.",
      "Providing instant assistance 24/7.",
      "Ensuring consistent and dependable responses.",
      "Offering exceptional customer service across multiple communication channels.",
    ],
    image: "/portfolio/portfolio-chatbot-business.png",
    link: "https://zetabot.co/",
    technologies: [
      {
        text: "LLM",
      },
      {
        text: "Lang Chain",
      },
      {
        text: "Streamlit",
      },
      {
        text: "Python",
      },
      {
        text: "RAG",
      },
      {
        text: "React.js",
      },
      {
        text: "Next.js",
      },
    ],
    status: "Active",
  },
  {
    title: "Imgcreator",
    description:
      "Imgcreator.ai is an AI-powered image tool that generates images based on text descriptions and allows users to erase parts of an image using text.",
    features: [
      " Generates images based on text descriptions.",
      " Ideal for creating photo-realistic stock photos.",
      "Editing photos using text descriptions.",
      "Creating illustrations for presentations, posters, websites, children's books and more.",
      "Allows users to erase parts of an image using text descriptions.",
    ],
    image: "/portfolio/portfolio-image-gen1.png",
    link: "https://www.zmo.ai/",
    technologies: [
      {
        text: "Python",
      },
      {
        text: "LLM",
      },
      {
        text: "RAG",
      },
      {
        text: "Open API",
      },
      {
        text: "AWS",
      },
      {
        text: "Next.js",
      },
    ],
    status: "On Hold",
  },
  {
    title: "VozPod",
    description:
      "Vozpod is an AI tool that generates short audiobooks on any topic, offering a break from screen time and aiding those feeling visually overwhelmed or emotionally unbalanced.",
    features: [
      "Audiobook generation.",
      " Text input.",
      "Links support.",
      "Service privacy terms.",
    ],
    image:
      "/portfolio/portfolio-text-voice.png",
    link: "https://www.vozpod.com/",
    technologies: [
      {
        text: "Python",
      },
      {
        text: "LLama Index",
      },
      {
        text: "TTS",
      },
      {
        text: "Librosa",
      },
      {
        text: "Open API",
      },
      {
        text: "React.js",
      },
      {
        text: "Tailwind CSS",
      },
    ],
    status: "Completed",
  }
];
