import { fisherYates } from "./fisherYates";

export const generatePassword = (req) => {
	const length = req.query.length || 8;
	const charset =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

	return fisherYates(charset).slice(0, length).join("");
};
