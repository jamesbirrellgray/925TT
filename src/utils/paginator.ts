const Paginator = (items, page, per_page) => {
  var page = page || 1,
    per_page = per_page || 11,
    offset = (page - 1) * per_page,
    paginatedItems = items.slice(offset).slice(0, per_page),
    total_pages = Math.ceil(items.length / per_page),
    nextPage = parseInt(page) + 1;
  return {
    page: page,
    per_page: per_page,
    pre_page: parseInt(page) - 1 ? parseInt(page) - 1 : null,
    next_page: total_pages > page ? nextPage : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems,
  };
};

export default Paginator;
