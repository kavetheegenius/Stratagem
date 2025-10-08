// Menu configuration for Stratagem trading platform
const menuItems = {
  items: [
    {
      id: 'trading',
      title: 'Trading',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Trading Dashboard',
          type: 'collapse',
          icon: 'material-icons-two-tone',
          iconname: 'analytics',
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
            },
            {
              id: 'watchlist',
              title: 'Watchlist',
              type: 'item',
              url: '/dashboard/watchlist'
            }
          ]
        }
      ]
    },
    {
      id: 'analytics',
      title: 'ANALYTICS',
      subtitle: 'Market Insights',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'technical-analysis',
          title: 'Technical Analysis',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'trending_up',
          url: '/technical-analysis'
        },
        {
          id: 'market-scanner',
          title: 'Market Scanner',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'search',
          url: '/market-scanner'
        },
        {
          id: 'performance',
          title: 'Performance',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'bar_chart',
          url: '/performance'
        }
      ]
    },
    {
      id: 'account',
      title: 'Account',
      subtitle: 'User Management',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'login',
          title: 'Login',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'verified_user',
          url: '/login',
          target: true
        },
        {
          id: 'register',
          title: 'Register',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'person_add_alt_1',
          url: '/register',
          target: true
        }
      ]
    },
    {
      id: 'resources',
      title: 'RESOURCES',
      subtitle: 'Tools & Learning',
      type: 'group',
      icon: 'icon-support',
      children: [
        {
          id: 'trading-tools',
          title: 'Trading Tools',
          type: 'item',
          url: '/trading-tools',
          classes: 'nav-item',
          icon: 'material-icons-two-tone',
          iconname: 'build'
        },
        {
          id: 'education',
          title: 'Education',
          type: 'collapse',
          icon: 'material-icons-two-tone',
          iconname: 'school',
          children: [
            {
              id: 'tutorials',
              title: 'Tutorials',
              type: 'item',
              url: '/education/tutorials'
            },
            {
              id: 'webinars',
              title: 'Webinars',
              type: 'item',
              url: '/education/webinars'
            }
          ]
        }
      ]
    }
  ]
};

export default menuItems;