import React from 'react';
import Header from './Header';
import Entry from './Entry';
import emojipedia from '../emojipedia';

//Refactored Version

function App() {
  return (
    <div>
      <Header />
      <dl className='dictionary'>
        {emojipedia.map((emojiTerm) => (
          <Entry
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

//original version
// function createEntry(emojiTerm) {
//   return (
//     <Entry
//       key={emojiTerm.id}
//       emoji={emojiTerm.emoji}
//       name={emojiTerm.name}
//       description={emojiTerm.meaning}
//     />
//   );
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       <dl className='dictionary'>{emojipedia.map(createEntry)}</dl>
//     </div>
//   );
// }

export default App;
