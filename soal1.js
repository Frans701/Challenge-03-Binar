var emptyShip = new Ship(21, 9);

function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;

  this.muatan = draft + crew * 1.5;
  if (this.muatan > 20) {
    this.cetakMuatan = "Banyak nih muatan kapalnya";
  } else {
    this.cetakMuatan = "Lebih banyak muatan orangnya..";
  }
}

console.log(emptyShip.cetakMuatan);
