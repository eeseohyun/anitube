export const recommendedVideos = (req, res) => res.render("home");
export const see = (req, res) => res.send(`Watch Video #${req.params.id}`);
export const edit = (req, res) => {
	console.log(req.params);
	return res.send("Edit");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
	console.log(req.params);
	return res.send("Delete Video");
};
