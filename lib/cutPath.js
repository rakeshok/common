
export default function cutPath (path, totalWords=10) {
  let words = path.split(/\s/);

  return words.slice(0, totalWords);
}
