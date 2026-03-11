import { useState } from 'react';
import { Search, Filter, ChevronRight } from 'lucide-react';
import { announcements } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';
import { themes, getCategoryStyles } from '../../themes';

const categories = ['All', 'Event', 'Safety', 'News', 'Meeting'];

export default function V6Announcements() {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState(announcements[0]?.id || null);

  const filteredAnnouncements = announcements.filter((a) => {
    const matchesCategory = activeCategory === 'All' || a.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.preview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedAnnouncement = announcements.find((a) => a.id === selectedId) || filteredAnnouncements[0];

  return (
    <div className="p-6 lg:p-8 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className={`text-2xl font-bold ${t.headingColor}`}>Announcements</h1>
        <p className={`mt-1 text-sm ${t.mutedColor}`}>
          Browse and read neighborhood announcements.
        </p>
      </div>

      {/* Three-panel layout */}
      <div className="flex-1 grid lg:grid-cols-12 gap-4 min-h-0">
        {/* Left: Filters */}
        <div className="lg:col-span-2">
          <div className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} p-4`}>
            <h3 className={`text-xs font-semibold uppercase tracking-wider ${t.mutedColor} mb-3`}>Categories</h3>
            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-teal-50 text-teal-700'
                      : `${t.bodyColor} hover:bg-gray-50`
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center: List */}
        <div className="lg:col-span-4">
          <div className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} overflow-hidden flex flex-col`}>
            {/* Search */}
            <div className={`p-3 ${t.panelHeaderBorder}`}>
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${t.subtleColor}`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className={`w-full pl-9 pr-4 py-2 rounded-lg border ${t.inputBg} ${t.inputBorder} ${t.inputText} text-sm focus:outline-none ${t.inputFocus} ${t.inputPlaceholder}`}
                />
              </div>
            </div>

            {/* List */}
            <div className="divide-y divide-gray-100 overflow-y-auto max-h-[600px]">
              {filteredAnnouncements.length > 0 ? (
                filteredAnnouncements.map((a) => {
                  const isSelected = a.id === selectedAnnouncement?.id;
                  const formattedDate = new Date(a.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  });
                  return (
                    <button
                      key={a.id}
                      onClick={() => setSelectedId(a.id)}
                      className={`w-full text-left px-4 py-3 transition-colors ${
                        isSelected ? 'bg-teal-50/60 border-l-2 border-l-teal-500' : 'hover:bg-gray-50 border-l-2 border-l-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${getCategoryStyles(activeVariant, a.category)}`}>
                          {a.category}
                        </span>
                        <span className={`text-xs ${t.subtleColor}`}>{formattedDate}</span>
                      </div>
                      <h3 className={`text-sm font-semibold ${isSelected ? 'text-teal-700' : t.headingColor} truncate`}>
                        {a.title}
                      </h3>
                      <p className={`text-xs ${t.mutedColor} mt-0.5 line-clamp-1`}>{a.preview}</p>
                    </button>
                  );
                })
              ) : (
                <div className="p-8 text-center">
                  <Filter className={`w-8 h-8 ${t.subtleColor} mx-auto mb-2`} />
                  <p className={`text-sm ${t.mutedColor}`}>No announcements found</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Detail Panel */}
        <div className="lg:col-span-6">
          {selectedAnnouncement ? (
            <div className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} p-6 h-full`}>
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs font-medium px-2 py-1 rounded ${getCategoryStyles(activeVariant, selectedAnnouncement.category)}`}>
                  {selectedAnnouncement.category}
                </span>
                <span className={`text-sm ${t.subtleColor}`}>
                  {new Date(selectedAnnouncement.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <h2 className={`text-xl font-bold ${t.headingColor} mb-4`}>
                {selectedAnnouncement.title}
              </h2>
              <p className={`text-sm ${t.bodyColor} leading-relaxed mb-4`}>
                {selectedAnnouncement.content || selectedAnnouncement.preview}
              </p>
              <div className={`pt-4 ${t.panelHeaderBorder}`}>
                <p className={`text-xs ${t.subtleColor}`}>
                  Posted on {new Date(selectedAnnouncement.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
          ) : (
            <div className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} p-6 h-full flex items-center justify-center`}>
              <p className={`${t.mutedColor}`}>Select an announcement to read</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
