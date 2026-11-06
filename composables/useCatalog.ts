import products from '~/data/products.json'
import categories from '~/data/categories.json'

export const PAGE_SIZE = 6

export function useCatalog() {
  const getCategory = (slug: string) => categories.find(c => c.slug === slug)
  const getProduct = (id: string) => products.find(p => p.id === id)
  const byCategory = (slug: string) => products.filter(p => p.categoria === slug)
  const countByCategory = (slug: string) => byCategory(slug).length
  const search = (q: string) => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean)
    if (!terms.length) return []
    return products.filter(p => {
      const cat = getCategory(p.categoria)?.nombre ?? ''
      const hay = [p.nombre, p.descripcion, p.marca, p.material, p.color, p.tipoBombillo, cat]
        .join(' ').toLowerCase()
      return terms.every(t => hay.includes(t))
    })
  }
  const paginate = <T,>(items: T[], page: number) => ({
    items: items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    totalPages: Math.max(1, Math.ceil(items.length / PAGE_SIZE))
  })
  return { products, categories, getCategory, getProduct, byCategory, countByCategory, search, paginate }
}
