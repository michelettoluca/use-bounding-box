import { useEffect, useState } from "react";

export const useBoundingBox = (elRef) => {
	const [boundingBox, setBoundingBox] = useState({
		x: undefined,
		y: undefined,
		width: undefined,
		height: undefined,
		top: undefined,
		right: undefined,
		bottom: undefined,
		left: undefined,
	});

	useEffect(() => {
		const resizeObserver = new ResizeObserver(([el]) => {
			const _boundingBox = el.target.getBoundingClientRect();
			setBoundingBox(_boundingBox);
		});

		resizeObserver.observe(elRef.current);

		return () => {
			resizeObserver.unobserve(elRef.current);
		};
	}, []);

	return boundingBox;
};
