export function handleQueryError(err: unknown) {
	let errorMessage: string;
	if (err instanceof Error) {
		errorMessage = err.message;
	} else {
		errorMessage = "An unknown error occurred.";
	}
	// toast notify user, log as an example
	console.log(errorMessage);
    return errorMessage;
}
