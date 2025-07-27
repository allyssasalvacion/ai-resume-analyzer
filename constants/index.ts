export const resumes: Resume[] = [
  {
    id: "1",
    companyName: "Google",
    jobTitle: "Frontend Developer",
    imagePath: "/images/resume_01.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overallScore: 85,
      ATS: {
        score: 90,
        tips: [
          {
            type: "good" as const,
            tip: "ATS-friendly format used"
          }
        ],
      },
      toneAndStyle: {
        score: 90,
        tips: [
          {
            type: "good" as const,
            tip: "Professional tone maintained",
            explanation: "Your resume maintains a professional and confident tone throughout."
          }
        ],
      },
      content: {
        score: 90,
        tips: [
          {
            type: "good" as const,
            tip: "Relevant experience highlighted",
            explanation: "Your work experience aligns well with the job requirements."
          }
        ],
      },
      structure: {
        score: 90,
        tips: [
          {
            type: "good" as const,
            tip: "Clear section organization",
            explanation: "Resume is well-organized with clear sections that are easy to navigate."
          }
        ],
      },
      skills: {
        score: 90,
        tips: [
          {
            type: "good" as const,
            tip: "Technical skills well-represented",
            explanation: "Your technical skills are clearly listed and relevant to the position."
          }
        ],
      },
    },
  },
  {
    id: "2",
    companyName: "Microsoft",
    jobTitle: "Cloud Engineer",
    imagePath: "/images/resume_02.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overallScore: 55,
      ATS: {
        score: 60,
        tips: [
          {
            type: "improve" as const,
            tip: "Use standard section headers"
          }
        ],
      },
      toneAndStyle: {
        score: 50,
        tips: [
          {
            type: "improve" as const,
            tip: "Avoid passive language",
            explanation: "Consider using more active voice and action verbs to describe your achievements."
          }
        ],
      },
      content: {
        score: 55,
        tips: [
          {
            type: "improve" as const,
            tip: "Add quantifiable achievements",
            explanation: "Include specific metrics and numbers to demonstrate your impact in previous roles."
          }
        ],
      },
      structure: {
        score: 60,
        tips: [
          {
            type: "improve" as const,
            tip: "Improve bullet point consistency",
            explanation: "Ensure all bullet points follow the same format and structure for better readability."
          }
        ],
      },
      skills: {
        score: 50,
        tips: [
          {
            type: "improve" as const,
            tip: "Add cloud-specific technologies",
            explanation: "Include more relevant cloud technologies like Azure, AWS services that match the job requirements."
          }
        ],
      },
    },
  },
  {
    id: "3",
    companyName: "Apple",
    jobTitle: "iOS Developer",
    imagePath: "/images/resume_03.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 75,
      ATS: {
        score: 80,
        tips: [
          {
            type: "good" as const,
            tip: "Standard file format used"
          }
        ],
      },
      toneAndStyle: {
        score: 75,
        tips: [
          {
            type: "good" as const,
            tip: "Confident presentation",
            explanation: "Your achievements are presented confidently without overselling."
          }
        ],
      },
      content: {
        score: 70,
        tips: [
          {
            type: "improve" as const,
            tip: "Highlight iOS-specific projects",
            explanation: "Focus more on iOS development projects and App Store publications to show relevant experience."
          }
        ],
      },
      structure: {
        score: 80,
        tips: [
          {
            type: "good" as const,
            tip: "Good visual hierarchy",
            explanation: "The resume has a clear visual hierarchy that guides the reader's attention effectively."
          }
        ],
      },
      skills: {
        score: 75,
        tips: [
          {
            type: "improve" as const,
            tip: "Add Swift and Objective-C versions",
            explanation: "Specify which versions of Swift and Objective-C you're proficient with."
          }
        ],
      },
    },
  },
  {
    id: "4",
    companyName: "Meta",
    jobTitle: "Full Stack Developer",
    imagePath: "/images/resume_01.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overallScore: 85,
      ATS: {
        score: 90,
        tips: [
          {
            type: "good" as const,
            tip: "Machine-readable format"
          }
        ],
      },
      toneAndStyle: {
        score: 85,
        tips: [
          {
            type: "good" as const,
            tip: "Balanced technical depth",
            explanation: "You effectively balance technical details with business impact in your descriptions."
          }
        ],
      },
      content: {
        score: 80,
        tips: [
          {
            type: "good" as const,
            tip: "Strong project descriptions",
            explanation: "Your projects clearly demonstrate full-stack capabilities and problem-solving skills."
          }
        ],
      },
      structure: {
        score: 90,
        tips: [
          {
            type: "good" as const,
            tip: "Logical flow maintained",
            explanation: "Information flows logically from contact details through experience to skills."
          }
        ],
      },
      skills: {
        score: 85,
        tips: [
          {
            type: "good" as const,
            tip: "Comprehensive tech stack",
            explanation: "Your tech stack covers both frontend and backend technologies relevant to full-stack development."
          }
        ],
      },
    },
  },
  {
    id: "5",
    companyName: "Netflix",
    jobTitle: "DevOps Engineer",
    imagePath: "/images/resume_02.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overallScore: 65,
      ATS: {
        score: 70,
        tips: [
          {
            type: "improve" as const,
            tip: "Add relevant keywords"
          }
        ],
      },
      toneAndStyle: {
        score: 60,
        tips: [
          {
            type: "improve" as const,
            tip: "Show ownership and initiative",
            explanation: "Use stronger action verbs that demonstrate leadership and proactive problem-solving."
          }
        ],
      },
      content: {
        score: 65,
        tips: [
          {
            type: "improve" as const,
            tip: "Include automation examples",
            explanation: "Provide specific examples of processes you've automated and the time/cost savings achieved."
          }
        ],
      },
      structure: {
        score: 70,
        tips: [
          {
            type: "improve" as const,
            tip: "Group related technologies",
            explanation: "Organize your technical skills by categories (CI/CD, Cloud, Monitoring, etc.) for better readability."
          }
        ],
      },
      skills: {
        score: 60,
        tips: [
          {
            type: "improve" as const,
            tip: "Add containerization tools",
            explanation: "Include Docker, Kubernetes, and other containerization technologies that are essential for DevOps roles."
          }
        ],
      },
    },
  },
  {
    id: "6",
    companyName: "Spotify",
    jobTitle: "Data Scientist",
    imagePath: "/images/resume_03.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 78,
      ATS: {
        score: 85,
        tips: [
          {
            type: "good" as const,
            tip: "Clean formatting structure"
          }
        ],
      },
      toneAndStyle: {
        score: 75,
        tips: [
          {
            type: "good" as const,
            tip: "Data-driven language used",
            explanation: "Your descriptions effectively communicate analytical thinking and data-driven decision making."
          }
        ],
      },
      content: {
        score: 80,
        tips: [
          {
            type: "good" as const,
            tip: "Strong statistical background",
            explanation: "Your educational background and project work clearly demonstrate statistical and analytical skills."
          }
        ],
      },
      structure: {
        score: 75,
        tips: [
          {
            type: "improve" as const,
            tip: "Highlight key projects first",
            explanation: "Consider moving your most impactful data science projects to the top of your experience section."
          }
        ],
      },
      skills: {
        score: 80,
        tips: [
          {
            type: "good" as const,
            tip: "Relevant ML frameworks listed",
            explanation: "Your machine learning framework knowledge aligns well with industry standards and job requirements."
          }
        ],
      },
    },
  },
];

export const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      ATS: {
        score: number; //rate based on ATS suitability
        tips: {
          type: "good" | "improve";
          tip: string; //give 3-4 tips
        }[];
      };
      toneAndStyle: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      content: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      structure: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      skills: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
    }`;

export const prepareInstructions = ({
  jobTitle,
  jobDescription,
  AIResponseFormat,
}: {
  jobTitle: string;
  jobDescription: string;
  AIResponseFormat: string;
}) =>
  `You are an expert in ATS (Applicant Tracking System) and resume analysis.
  Please analyze and rate this resume and suggest how to improve it.
  The rating can be low if the resume is bad.
  Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
  If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
  If available, use the job description for the job user is applying to to give more detailed feedback.
  If provided, take the job description into consideration.
  The job title is: ${jobTitle}
  The job description is: ${jobDescription}
  Provide the feedback using the following format: ${AIResponseFormat}
  Return the analysis as a JSON object, without any other text and without the backticks.
  Do not include any other text or comments.`;