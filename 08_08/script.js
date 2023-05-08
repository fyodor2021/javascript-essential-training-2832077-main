/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

const formatter = (local, currency, value) => {
  let formattedValue = new Intl.NumberFormat(local,{
    style: "currency",
     currency:currency,
  }).format(value);
  return formattedValue;
}

const tipCalculator = (sum, percentage,local, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
      Sum before tip: ${formatter(local,currency,sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(local,currency,tip)}
      Total:          ${formatter(local,currency,total)}
    `);
};

tipCalculator(29.95, 18, "de-DE", "EUR");



