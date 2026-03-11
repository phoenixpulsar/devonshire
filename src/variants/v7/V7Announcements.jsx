import { useState } from 'react';
import { Search, Filter, ArrowRight, Megaphone, ChevronDown, ChevronUp } from 'lucide-react';
import { announcements } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';
import { themes } from '../../themes';

const categories = ['All', 'Event', 'Safety', 'News', 'Meeting'];

export default function V7Announcements() {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const filteredAnnouncements = announcements.filter((a) => {
    const matchesCategory = activeCategory === 'All' || a.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.preview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryGradient = (category) => {
    switch (category) {
      case 'Safety': return 'from-amber-400 to-orange-500';
      case 'Event': return 'from-blue-400 to-indigo-500';
      case 'Meeting': return 'from-rose-400 to-pink-500';
      case 'News': return 'from-purple-400 to-violet-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-24 lg:pb-8">
      {/* Header */}
      <div className="py-8">
        <h1 className={`text-2xl font-bold ${t.headingColor}`}>Community Feed</h1>
        <p className={`mt-1 text-sm ${t.mutedColor}`}>
          Stay informed about what is happening in Devonshire.
        </p>
      </div>

      {/* Search */}
      <div className="mb-4">
        <div className="relative">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${t.subtleColor}`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search announcements..."
            className={`w-full pl-9 pr-4 py-3 rounded-2xl border ${t.inputBg} ${t.inputBorder} ${t.inputText} text-sm focus:outline-none ${t.inputFocus} ${t.inputPlaceholder} transition-colors duration-300`}
          />
        </div>
      </div>

      {/* Category Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 -mb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md shadow-rose-200/50'
                : `${t.cardBg} ${t.cardBorder} ${t.bodyColor} hover:shadow-sm`
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className={`text-sm ${t.subtleColor} mb-4`}>
        {filteredAnnouncements.length} post{filteredAnnouncements.length !== 1 ? 's' : ''}
      </p>

      {/* Social-Style Posts */}
      {filteredAnnouncements.length > 0 ? (
        <div className="space-y-4">
          {filteredAnnouncements.map((a) => {
            const isExpanded = expandedId === a.id;
            const formattedDate = new Date(a.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            });

            return (
              <article
                key={a.id}
                id={String(a.id)}
                className={`${t.cardBg} ${t.cardRadius} ${t.cardBorder} ${t.transition} overflow-hidden`}
              >
                {/* Post Header */}
                <div className="p-5 pb-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${getCategoryGradient(a.category)} flex items-center justify-center`}>
                      <Megaphone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold ${t.headingColor}`}>Devonshire HOA</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          a.category === 'Safety' ? 'bg-amber-100 text-amber-700' :
                          a.category === 'Event' ? 'bg-blue-100 text-blue-700' :
                          a.category === 'Meeting' ? 'bg-rose-100 text-rose-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {a.category}
                        </span>
                      </div>
                      <span className={`text-xs ${t.subtleColor}`}>{formattedDate}</span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <h2 className={`text-lg font-bold ${t.headingColor} mb-2`}>{a.title}</h2>
                  <p className={`text-sm ${t.bodyColor} leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
                    {isExpanded ? (a.content || a.preview) : a.preview}
                  </p>
                </div>

                {/* Expand/Collapse */}
                <div className="px-5 py-3">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : a.id)}
                    className={`inline-flex items-center gap-1 text-sm font-medium ${t.accentColor} ${t.accentHover} transition-colors`}
                  >
                    {isExpanded ? (
                      <>
                        Show less
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Read more
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Post Footer */}
                <div className={`px-5 py-3 ${t.panelHeaderBorder} flex items-center justify-between`}>
                  <div className="flex items-center gap-4">
                    <button className={`text-xs font-medium ${t.mutedColor} hover:${t.accentColor.replace('text-', '')} transition-colors`}>
                      ♥ Like
                    </button>
                    <button className={`text-xs font-medium ${t.mutedColor} hover:${t.accentColor.replace('text-', '')} transition-colors`}>
                      💬 Comment
                    </button>
                    <button className={`text-xs font-medium ${t.mutedColor} hover:${t.accentColor.replace('text-', '')} transition-colors`}>
                      ↗ Share
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <Filter className={`w-12 h-12 ${t.subtleColor} mx-auto mb-4`} />
          <h3 className={`text-lg font-semibold ${t.headingColor} mb-1`}>No posts found</h3>
          <p className={`text-sm ${t.mutedColor}`}>
            Try adjusting your search or filter.
          </p>
        </div>
      )}
    </div>
  );
}
