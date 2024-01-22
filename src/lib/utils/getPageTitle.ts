const DEFAULT_PAGE_TITLE: string = 'Task list'

export const pageTitles: { [x: string]: string } = {
    '/contacts': "Connect with us",
    '/help-and-support': "Help & Support",
    '/expenses': 'Expenses'
}

export const getPageTitle = (routeId: string | null) => {
    if (!routeId || routeId === '/') return DEFAULT_PAGE_TITLE
    const key = Object.keys(pageTitles).find(title => routeId.includes(title))
    return key ? pageTitles[key] : ""
}