import { NextResponse } from "next/server";
import PptxGenJS from "pptxgenjs";

const metadata = {
  trainingTitle: "2-Day Mathematics Kit Training Report",
  schoolName: "Gandhi Aided Primary School",
  trainerName: "Mrs. Jayashree",
  trainees: ["Headmistress", "Assistant Teacher", "Senior Resource Person"],
  trainingDays: [
    {
      day: "Day 1",
      focus: "Introduction to Maths Kit Components",
      highlights: [
        "Hands-on exploration of kit materials",
        "Demonstrated activity-based learning techniques",
        "Discussed alignment with state curriculum",
      ],
    },
    {
      day: "Day 2",
      focus: "Classroom Implementation Strategies",
      highlights: [
        "Collaborative lesson planning workshop",
        "Assessment methods for concept mastery",
        "Action plan for integrating kit in daily lessons",
      ],
    },
  ],
  outcomes: [
    "Improved confidence in using manipulative-based teaching methods",
    "Established weekly Maths Lab schedule for classes III-V",
    "Documented framework for monitoring learner progress",
  ],
  nextSteps: [
    "Weekly peer observations to share best practices",
    "Monthly review meetings with trainer feedback",
    "Resource sharing folder for teaching aids and worksheets",
  ],
};

const createPresentation = async () => {
  const pptx = new PptxGenJS();

  pptx.title = metadata.trainingTitle;
  pptx.author = metadata.trainerName;
  pptx.company = metadata.schoolName;

  const titleSlide = pptx.addSlide();
  titleSlide.addText(metadata.trainingTitle, {
    x: 0.5,
    y: 1.0,
    w: 9.0,
    fontSize: 36,
    bold: true,
    color: "004080",
    align: "center",
  });
  titleSlide.addText(metadata.schoolName, {
    x: 1.0,
    y: 3.0,
    w: 8.0,
    fontSize: 24,
    color: "444444",
    align: "center",
  });
  titleSlide.addText(`Trainer: ${metadata.trainerName}`, {
    x: 1.0,
    y: 4.2,
    w: 8.0,
    fontSize: 20,
    color: "666666",
    align: "center",
  });

  const attendeesSlide = pptx.addSlide();
  attendeesSlide.addText("Training Participants", {
    x: 0.5,
    y: 0.6,
    fontSize: 32,
    bold: true,
    color: "004080",
  });
  const attendeeLines = [
    `Trainer: ${metadata.trainerName}`,
    ...metadata.trainees.map((trainee, index) => `Trainee ${index + 1}: ${trainee}`),
  ].join("\n");
  attendeesSlide.addText(attendeeLines, {
    x: 0.7,
    y: 1.8,
    fontSize: 24,
    bullet: true,
    color: "333333",
    lineSpacing: 28,
    w: 8.5,
  });

  metadata.trainingDays.forEach((dayInfo) => {
    const slide = pptx.addSlide();
    slide.addText(dayInfo.day, {
      x: 0.5,
      y: 0.6,
      fontSize: 30,
      bold: true,
      color: "004080",
    });
    slide.addText(dayInfo.focus, {
      x: 0.5,
      y: 1.6,
      fontSize: 24,
      color: "1D4ED8",
    });
    slide.addText(dayInfo.highlights.join("\n"), {
      x: 0.7,
      y: 2.4,
      fontSize: 20,
      bullet: true,
      color: "333333",
      lineSpacing: 24,
      w: 8.8,
    });
  });

  const outcomesSlide = pptx.addSlide();
  outcomesSlide.addText("Training Outcomes", {
    x: 0.5,
    y: 0.6,
    fontSize: 30,
    bold: true,
    color: "004080",
  });
  outcomesSlide.addText(metadata.outcomes.join("\n"), {
    x: 0.7,
    y: 1.8,
    fontSize: 22,
    bullet: true,
    color: "333333",
    lineSpacing: 26,
    w: 8.8,
  });

  const nextStepsSlide = pptx.addSlide();
  nextStepsSlide.addText("Next Steps & Follow-Up", {
    x: 0.5,
    y: 0.6,
    fontSize: 30,
    bold: true,
    color: "004080",
  });
  nextStepsSlide.addText(metadata.nextSteps.join("\n"), {
    x: 0.7,
    y: 1.8,
    fontSize: 22,
    bullet: true,
    color: "333333",
    lineSpacing: 26,
    w: 8.8,
  });

  const thanksSlide = pptx.addSlide();
  thanksSlide.addText("Thank You", {
    x: 0.5,
    y: 2.5,
    w: 9.0,
    fontSize: 36,
    bold: true,
    color: "004080",
    align: "center",
  });
  thanksSlide.addText("Together towards joyful mathematics learning!", {
    x: 1.0,
    y: 3.6,
    w: 8.0,
    fontSize: 22,
    color: "1D4ED8",
    align: "center",
  });

  const arrayBuffer = (await pptx.write({ outputType: "arraybuffer" })) as ArrayBuffer;
  return Buffer.from(arrayBuffer);
};

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const buffer = await createPresentation();
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "Content-Disposition": `attachment; filename="maths-kit-training-report.pptx"`,
        "Content-Length": buffer.byteLength.toString(),
      },
    });
  } catch (error) {
    console.error("Failed to generate PPT:", error);
    return NextResponse.json({ error: "Failed to generate report" }, { status: 500 });
  }
}
