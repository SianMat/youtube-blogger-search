async function youtubeSearch(searchTerm, channelId, ApiKey) {
  const request = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&q=${searchTerm}&type=video&key=${ApiKey}`;
  let results = [];
  try {
    const response = await fetch(request);
    if (response.ok) {
      const body = await response.json();
      const items = body.items;
      for (const video in items) {
        const title = items[video].snippet.title;
        const description = items[video].snippet.description;
        const videoId = items[video].id.videoId;
        results.push({
          title: title,
          description: description,
          videoId: videoId,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
  return results;
}

export default youtubeSearch;
