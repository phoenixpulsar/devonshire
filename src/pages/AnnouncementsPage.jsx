import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import AnnouncementCard from '../components/AnnouncementCard';
import { announcements } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../themes';

const categories = ['All', 'Event', 'Safety', 'News', 'Meeting'];

export default function AnnouncementsPage() {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAnnouncements = announcements.filter((a) => {
    const matchesCategory = activeCategory === 'All' || a.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.preview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen ${t.pageBg} transition-colors duration-500`}>
      {/* Header */}
      <div className={`${t.dashboardHeaderBg} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h1 className={`text-2xl sm:text-3xl font-bold ${t.headingColor} transition-colors duration-500`}>Announcements</h1>
          <p className={`mt-2 ${t.mutedColor} transition-colors duration-500`}>
            Stay informed about neighborhood news, events, safety updates, and meetings.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${t.subtleColor}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search announcements..."
              className={`w-full pl-9 pr-4 py-2.5 rounded-lg border ${t.inputBg} ${t.inputBorder} ${t.inputText} text-sm focus:outline-none ${t.inputFocus} ${t.inputPlaceholder} transition-colors duration-500`}
            />
          </div>

          {/* Category filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? t.filterActive
                    : t.filterInactive
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className={`text-sm ${t.subtleColor} mb-4 transition-colors duration-500`}>
          {filteredAnnouncements.length} announcement{filteredAnnouncements.length !== 1 ? 's' : ''}
        </p>

        {/* Announcement Feed */}
        {filteredAnnouncements.length > 0 ? (
          <div className="space-y-4">
            {filteredAnnouncements.map((a) => (
              <div key={a.id} id={String(a.id)}>
                <AnnouncementCard announcement={a} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Filter className={`w-12 h-12 ${t.subtleColor} mx-auto mb-4`} />
            <h3 className={`text-lg font-semibold ${t.headingColor} mb-1 transition-colors duration-500`}>No announcements found</h3>
            <p className={`text-sm ${t.mutedColor} transition-colors duration-500`}>
              Try adjusting your search or filter to find what you are looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
