import React from 'react';

function Card({ card }) {
  console.log(card);
  const { question, answer, createdAt } = card;

  return (
    <tr>
      <td>{question}</td>
      <td>{answer}</td>
      <td>{_changeDateFormat(createdAt)}</td>
    </tr>
  );
}

/**Reference
 * https://stackoverflow.com/questions/25159330/how-to-convert-an-iso-date-to-the-date-format-yyyy-mm-dd
 */
const _changeDateFormat = (isoString) => {
  return isoString.substring(0, 10);
};

export default Card;
