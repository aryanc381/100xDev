export interface Env {

}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method);
		console.log(request);

		if(request.method === "GET") {
			return Response.json({
				msg: "You sent a GET request."
			});
		} else {
			return Response.json({
				msg: "You did not send a GET request."
			})
		}
	},
} satisfies ExportedHandler<Env>;
