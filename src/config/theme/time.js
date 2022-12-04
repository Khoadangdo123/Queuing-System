import moment from "moment";


function typeDateToFormat() {
	// [x]: Some one Type Date you will use
}

// FIXME: this module still developer code
/**
 * @param // NOTE: { You have a date your real time }
 * @output // NOTE: { You will have text String time with MM/DD/YYYY }
 */
function formatDateCurrent(dateNow) {
	const [day, month, year] = [
		dateNow.getDate().toString(),
		dateNow.getMonth().toString(),
		dateNow.getFullYear().toString()
	];

	return (moment(`${day}/${month}/${year}`).format('MM/DD/YYYY'));
}

// FIXME: this module still developer code
/**
 * @param // NOTE: { You have a date your real time }
 * @output // NOTE: { You will have text String time with MM/DD/YYYY }
 * But: time increase
 */
function formatDateNext(dateNow) {
	const [day, month, year] = [
		(dateNow.getDate() + 10).toString(),
		(dateNow.getMonth() + 2).toString(),
		(dateNow.getFullYear() + 1).toString(),
	];

	return (moment(`${day}/${month}/${year}`).format('MM/DD/YYYY'));
}

export { formatDateCurrent, formatDateNext };