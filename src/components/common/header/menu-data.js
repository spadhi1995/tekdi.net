export const menuData = [
    {
        label:'Company',
        link:'/company',
        key: 'company'
    },
    {
        label:'Industries',
        link:'#',
        key: 'industries',
        className: 'parent',
        submenus: [
            {
                label:'Education',
                link:'/industries/education',
            },
            {
                label:'Agriculture',
                link:'/industries/agriculture',
            },
            {
                label:'Government Public Sector',
                link:'/industries/government-public-sector',
            },
            {
                label:'Not for Profit Organisations',
                link:'/industries/not-for-profit-organisations',
            },
            {
                label:'Logistics Transport',
                link:'/industries/logistics-transport',
            },
            {
                label:'Publishing, Media and News',
                link:'/industries/publishing-media-news',
            }
        ]
    },
    {
        label:'Digital Transformation',
        link:'#',
        key: 'digital',
        className: 'parent',
        submenus: [
            {
                label:'Content Management & Digital Publishing',
                link:'/digital-transformation/content-management-digital-publishing',
            },
            {
                label:'Business Process Transformation',
                link:'/digital-transformation/business-process-transformation',
            },
            {
                label:'E-commerce and Marketplaces',
                link:'/digital-transformation/ecommerce-and-marketplaces',
            },
            {
                label:'Learning and Education technology',
                link:'/digital-transformation/learning-edtech',
            },
            {
                label:'Technology enablement of Nonprofits',
                link:'/digital-transformation/technology-for-nonprofits',
            },
            {
                label:'Transportation',
                link:'/digital-transformation/transportation',
            },            
        ]
    },
    {
        label:'Products',
        link:'#',
        key: 'products',
        className: 'parent',
        submenus: [
            {
                label:'E-Learning Platform',
                link:'/products-and-platforms/e-learning-platform',
            },
            {
                label:'Non Profit Management',
                link:'/products-and-platforms/non-profit-management',
            },
            {
                label:'Enterprise Application Development Platform',
                link:'/products-and-platforms/enterprise-application-development-platform',
            },
            {
                label:'Unite',
                link:'/products-and-platforms/unite',
            },
        ]
    },
    {
        label:'Careers',
        link:'/careers',
        key: 'careers',
    },
    {
        label:'Blog',
        link:'/blog',
        key: 'blog',
    },
    {
        label:'Contact',
        link:'/contact',
        key: 'contact',
    }
];