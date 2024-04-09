import React from 'react';

const ClassIcon = async () => {
  const { props } = await getClassIcon();
  console.log(props);
  return (
    <main>
      <h1>Class Icon</h1>
    </main>
  )
}

const getClassIcon = async () => {
  const res = await fetch(`https://xivapi.com/item/1675?private_key=${process.env.XIV_KEY}`);
  const data = await res.json();
  return { props: { data } };
}

export default ClassIcon;