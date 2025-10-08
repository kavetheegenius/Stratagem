// Market feed data to display in card widget

const FeedData = {
  wrapclass: 'feed-card',
  height: '385px',
  title: 'Market Alerts',
  options: [
    {
      icon: 'trending_up',
      bgclass: 'light-success',
      heading: 'AAPL crossed $150 resistance level',
      publishon: 'Just Now',
      link: '#'
    },
    {
      icon: 'trending_down',
      bgclass: 'light-danger',
      heading: 'TSLA dropped below $200 support',
      publishon: '5 min ago'
    },
    {
      icon: 'notifications',
      heading: 'Price alert: BTC approaching $45,000',
      publishon: '15 min ago',
      link: '/dashboard'
    },
    {
      icon: 'show_chart',
      bgclass: 'light-info',
      heading: 'SPY showing bullish divergence on 4H chart',
      publishon: '30 min ago'
    },
    {
      icon: 'warning',
      bgclass: 'light-warning',
      heading: 'High volatility detected in NVDA options',
      publishon: '1 hour ago'
    },
    {
      icon: 'account_balance',
      heading: 'Portfolio rebalancing suggestion available',
      publishon: '2 hours ago'
    },
    {
      icon: 'attach_money',
      bgclass: 'light-success',
      heading: 'EUR/USD breaking out of consolidation pattern',
      publishon: '3 hours ago',
      link: '#'
    },
    {
      icon: 'candlestick_chart',
      heading: 'New trading pattern identified: MSFT',
      publishon: '4 hours ago'
    },
    {
      icon: 'schedule',
      bgclass: 'light-primary',
      heading: 'Market close alert: 1 hour remaining',
      publishon: '5 hours ago',
      link: '/dashboard'
    },
    {
      icon: 'auto_graph',
      heading: 'AI signal: Strong buy signal for AMZN',
      publishon: '6 hours ago'
    },
    {
      icon: 'bar_chart',
      bgclass: 'light-info',
      heading: 'Weekly performance report generated',
      publishon: '1 day ago'
    },
    {
      icon: 'security',
      heading: 'Unusual options activity detected in SPY',
      publishon: '1 day ago'
    }
  ]
};

export default FeedData;