export default function handler(req, res) {
  // Réponse en JavaScript qui définit une clé API globale
  res.setHeader("Content-Type", "application/javascript");
  res.status(200).send(`window.API_KEY = "${process.env.API_KEY}";`);
}
