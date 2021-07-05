import decrescente from './src/ForDecrescente';

it('should decrement unsorted array with sorted array output'){

	expect(
		decrescente([0,-9,1]),
		[-9,0,1]
	);

	fail(true);

}

