import React from 'react';

function HomePage() {
  return (
    <div style={{backgroundImage: 'url("https://picsum.photos/1600/900")', backgroundSize: 'cover'}}>
      <div style={{backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '50px'}}>
        <h1 style={{fontSize: '48px', marginBottom: '30px'}}>Καλώς ήρθατε στον ιστότοπο μαθημάτων μας!</h1>
        <p style={{fontSize: '24px', marginBottom: '30px'}}>Εδώ θα βρείτε μια πλήρη σειρά από μαθήματα για όλα τα επίπεδα εκπαίδευσης.</p>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '50px'}}>
        < img src={require('./images/1.jpg')} alt="Μαθήματα" style={{marginRight: '50px'}} />
<img src={require('./images/2.jpg')} alt="Μαθήματα" style={{marginRight: '50px'}} />
<img src={require('./images/3.jpg')} alt="Μαθήματα" style={{marginRight: '50px'}} />

        </div>
      </div>
    </div>
  );
}

export default HomePage;
