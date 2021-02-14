const blogId = "5261886283474622931";
const ApiKey = "AIzaSyBvH1BdMybTRkss2zC-9R39-3CulpX6nsc";

async function bloggerSearch(searchTerm) {
  const request = `https://blogger.googleapis.com/v3/blogs/${blogId}/posts/search?q=${searchTerm}&key=${ApiKey}`;
  let results = [];
  try {
    const response = await fetch(request);
    const body = await response.json();
    if (body.items) {
      const items = body.items;
      for (const blog in items) {
        const title = items[blog].title;
        const content = items[blog].content;
        results.push({
          title: title,
          content: content,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
  return results;
}

export default bloggerSearch;
