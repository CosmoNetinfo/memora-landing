async function main() {
  const res = await fetch('https://memora-landing-bay.vercel.app/');
  const text = await res.text();
  console.log(text);
}
main();
