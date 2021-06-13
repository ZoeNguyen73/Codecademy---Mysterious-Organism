// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  };
  
  //Function to create multiple objects
  const pAequorFactory = (specimenNum, dna)=> {
    return {
      specimenNum,
      dna,
      mutate() {
        const dnaBases = ['A', 'T', 'C', 'G']
        let randomIndex = Math.floor(Math.random() * this.dna.length);
        dnaBases.splice(dnaBases.indexOf(this.dna[randomIndex]),1);
        let newBase = dnaBases[Math.floor(Math.random()*3)];
        this.dna[randomIndex] = newBase;
        return this.dna;
      },
      compareDNA : function (pAequor) {
        let sameBaseCount = 0;
        for (let i = 0; i<15; i++) {
          if (this.dna[i]=== pAequor.dna[i]) {
            sameBaseCount ++;
          };
        };
        sameBaseCount = Math.floor((sameBaseCount / this.dna.length) * 100);
        console.log( `specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${sameBaseCount}% DNA in common.`);
        return sameBaseCount;
      },
      willLikelySurvive() {
        let goodBase = this.dna.filter(base => {
          return base === 'C' || base === 'G'
        });
        return (goodBase.length/15) >= 0.6 ;
      },
      complementStrand() {
        let strand2 = [];
        for (let i=0; i <this.dna.length;i++) {
          switch (this.dna[i]) {
            case 'A':
            strand2.push('T');
            break;
            case 'T':
            strand2.push('A');
            break;
            case 'C':
            strand2.push('G');
            break;
            case 'G':
            strand2.push('C');
            break;
            default:
            break;
          };
        };
        return strand2;
      },
    };
  };
  
  //Function to create 30 organisms that are likely to survive
  const organismsArray = [];
  let i = 1;
  while (organismsArray.length < 30) {
    let newOrganism = pAequorFactory(i, mockUpStrand());
    if (newOrganism.willLikelySurvive()) {
      organismsArray.push(newOrganism);
    };
    i++;
  };
  
  //Function to find 2 most related instances of pAequor
  const findTop2Similar = array => {
    let s1 = 0;
    let s2 = 0;
    let percent = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        let org1 = array[i];
        let org2 = array[j];
        if (org1.compareDNA(org2) > percent) {
          percent = org1.compareDNA(org2);
          s1 = org1.specimenNum;
          s2 = org2.specimenNum;
        };
      };
    };
    return `specimen #${s1} and specimen #${s2} are most similar, with ${percent}% similar in DNA.`
  };
  