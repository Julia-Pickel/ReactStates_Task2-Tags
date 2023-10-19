import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  // Task: Add a new Tag
  function handleAddTag(newTag) {
    setTags([...tags, newTag]);
  }

  // Task: Remove a Tag
  function handleDeleteTag(tagToDelete) {
    setTags(tags.filter((tags) => tags !== tagToDelete));
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
