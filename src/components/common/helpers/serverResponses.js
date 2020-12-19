/**
 * Handler error messages for Api responses
 * @param {String} message
 * @param {Number} status HTTP Status code
 * @param {String} reason
 */
export class Failure {
  constructor({ reason, message, status }) {
    this.reason = reason;
    this.message = message;
    this.status = status;
    this.date = new Date().toISOString();
  }
}
/**
 * Handler Successfully messages for Api responses
 * @param {Number} status HTTP Status code
 * @param {String} reason
 * @param {Object} data
 */
export class Success {
  constructor({ message, status, data }) {
    this.message = message;
    this.status = status;
    this.date = new Date().toISOString();
    this.data = data;
  }
}
