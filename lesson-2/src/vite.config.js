import { defineConfig } from 'vite'
import { getClientRoot, getThemeRoots } from '@slidev/cli'

const clientRoot = getClientRoot();
const themeRoots = getThemeRoots();

export default defineConfig({
  slidev: {
    components: {
      dirs: [
        `${clientRoot}/builtin`,
        `${clientRoot}/components`,
        ...themeRoots.map(i => `${i}/components`),
        'src/components',
        'components',
        '../../components',
      ]
    }
  },
})