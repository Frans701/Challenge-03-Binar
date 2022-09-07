function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}

Ship.prototype.beratMuatan = function () {
  this.muatan = this.draft + this.crew * 1.5;
  if (this.muatan > 20) {
    return "Banyak nih muatan kapalnya";
  } else {
    return "Lebih banyak muatan orangnya..";
  }
};

var emptyShip = new Ship(20, 5);
console.log(emptyShip.beratMuatan());
