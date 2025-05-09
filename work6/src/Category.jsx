const categoryList = [
	{ id: 1, category: "전체" },
	{ id: 2, category: "음악" },
	{ id: 3, category: "팟캐스트" },
	{ id: 4, category: "믹스" },
	{ id: 5, category: "라이브" },
	{ id: 6, category: "랩" },
];

function Category() {
	return (
		<div>
			{categoryList.map((category) => (
				<div
					id={category.id}
					className="bg-gray-300 px-4 py-2 text-sm rounded-lg"
				>
					{category.category}
				</div>
			))}
		</div>
	);
}

export default Category;
