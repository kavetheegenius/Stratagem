// Menu configuration for Stratagem trading platform (collapsed layout)
const menuItems = {
  items: [
    {
      id: 'trading',
      title: 'Trading',
      type: 'group',
      children: [
        {
          id: 'dashboard',
          title: 'Trading Dashboard',
          type: 'collapse',
          children: [
            {
              id: 'market-overview',
              title: 'Market Overview',
              type: 'item',
              url: '/dashboard/market-overview'
            },
            {
              id: 'portfolio',
              title: 'Portfolio',
              type: 'item',
              url: '/dashboard/portfolio'
            }
          ]
        }
      ]
    },
    {
      type: 'group',
      id: 'analytics-group',
      children: [
        {
          id: 'technical-analysis',
          title: 'Technical Analysis',
          type: 'item',
          url: '/technical-analysis'
        },
        {
          id: 'market-scanner',
          title: 'Market Scanner',
          type: 'item',
          url: '/market-scanner'
        }
      ]
    },
    {
      id: 'account',
      title: 'Account',
      type: 'group',
      children: [
        {
          id: 'login',
          title: 'Login',
          type: 'item',
          url: '/login'
        },
        {
          id: 'register',
          title: 'Register',
          type: 'item',
          url: '/register'
        }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      type: 'group',
      children: [
        {
          id: 'trading-tools',
          title: 'Trading Tools',
          type: 'item',
          url: '/trading-tools'
        }
      ]
    }
  ]
};

export default menuItems;