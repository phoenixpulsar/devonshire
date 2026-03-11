import { createContext, useContext, useState, useCallback } from 'react';

const ThemeContext = createContext(null);

export const VARIANTS = [1, 2, 3, 4, 5, 6, 7];

export const VARIANT_LABELS = {
  1: 'Option 1',
  2: 'Option 2',
  3: 'Option 3',
  4: 'Option 4',
  5: 'Option 5',
  6: 'Option 6',
  7: 'Option 7',
};

export const VARIANT_DESCRIPTIONS = {
  1: 'Clean & Modern',
  2: 'Dark Mode',
  3: 'Fresh Alternative',
  4: 'Bold Premium',
  5: 'Artistic Vision',
  6: 'Command Center',
  7: 'Community Feed',
};

export function ThemeProvider({ children }) {
  const [activeVariant, setActiveVariant] = useState(1);

  const switchVariant = useCallback((variant) => {
    if (VARIANTS.includes(variant)) {
      setActiveVariant(variant);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ activeVariant, switchVariant }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
