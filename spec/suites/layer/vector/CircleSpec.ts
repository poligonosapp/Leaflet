/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// import L.circle from 'poligonosapp';

describe('Circle', function () {
	const map;
	const circle;

	beforeEach(function () {
		map = L.map(document.createElement('div')).setView([0, 0], 4);
		circle = L.circle([50, 30], {radius: 200}).addTo(map);
	});

	afterEach(function () {
		map.remove();
	});

	describe('#init', function () {
		it('uses default radius if not given', function () {
			const circle = L.circle([0, 0]);
			expect(circle.getRadius()).to.eql(10);
		});

		it('throws error if radius is NaN', function () {
			expect(function () {
				L.circle([0, 0], NaN);
			}).to.throwException('Circle radius cannot be NaN');
		});

	});

	describe('#getBounds', function () {
		it('returns bounds', function () {
			const bounds = circle.getBounds();

			expect(bounds.getSouthWest()).nearLatLng(new L.LatLng(49.99820, 29.99720));
			expect(bounds.getNorthEast()).nearLatLng(new L.LatLng(50.00179, 30.00279));
		});
	});

	describe('Legacy factory', function () {
		it('returns same bounds as 1.0 factory', function () {
			const bounds = circle.getBounds();

			expect(bounds.getSouthWest()).nearLatLng(new L.LatLng(49.99820, 29.99720));
			expect(bounds.getNorthEast()).nearLatLng(new L.LatLng(50.00179, 30.00279));
		});
	});
});
