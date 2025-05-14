import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "YouTube Transcript LLM Search",
    description:
      "RAG LLM Search that reads the transcripts from a YouTube Playlist and allows users to search for particular topics across all videos",
    stack: ["Python", "Flask", "Elasticsearch", "Docker"],
    github: "https://github.com/MichaelShoemaker/PlaylistGuide-LLM-Flask",
    live: "https://your-app-url.render.com"
  },
  {
    title: "Weather ETL Pipeline",
    description:
      "Automated weather data ingestion using GCP Cloud Functions, stored to BigQuery with dbt transformations.",
    stack: ["Python", "GCP", "BigQuery", "dbt", "Cloud Scheduler"],
    github: "https://github.com/yourusername/weather-etl",
    live: "https://your-app-url-2.render.com"
  },
  {
    title: "Iceberg + Nessie Document Store",
    description:
      "Docker Compose with a Makefile to load Flight Data into Postgres and query with PGAdmin to Practice SQL",
    stack: ["Docker", "Postgres", "SQL", "Makefile"],
    github: "https://github.com/MichaelShoemaker/sql_practice_flight_data",
    live: "https://www.youtube.com/watch?v=dThedBOnozQ"
  }
];

export default function PortfolioPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Michael Shoemaker's Data Engineering Portfolio
      </motion.h1>

      <motion.p
        className="text-lg mb-8 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        A collection of end-to-end data engineering projects, with real-world data, cloud deployments, and open-source tools.
      </motion.p>

      <div className="grid gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
          >
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{proj.title}</h2>
                <p className="text-sm mb-4 text-muted-foreground">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Github className="w-4 h-4" /> Code
                    </Button>
                  </a>
                  <a href={proj.live} target="_blank" rel="noopener noreferrer">
                    <Button className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" /> Walkthrough
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
