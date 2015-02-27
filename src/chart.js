import d3 from 'd3';

export class Chart{

  static inject() {
    return [Element];
  }

	constructor(element){
    this.element = element;

    this.matrix = [
      [11975,  5871, 8916, 2868]
    ];
	}

  attached(element){
    var self = this;
    console.log('Setting value')
    this.matrix = [
      [11975,  5871, 8916, 2868],
      [ 1951, 10048, 2060, 6171],
      [ 8010, 16145, 8090, 8045],
      [ 1013,   990,  940, 6907]
    ];
  }
}
