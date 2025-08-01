import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzPluginData } from "./quartz/plugins/vfile"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.PageNavigation(),
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "dodolalorc/dodolalorc.github.io",
        repoId: "R_kgDOLYjsRQ",
        category: "Announcements",
        categoryId: "DIC_kwDOLYjsRc4Clp7p",
        mapping: "pathname",
        strict: false,
        reactionsEnabled: true,
        inputPosition: "bottom",
        lang: "zh-CN",
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/dodolalorc",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs({
        rootName: "主页",
      }),
      condition: (page) => page.fileData.slug !== "_index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.FeaturedImage(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(Component.RecentNotes({
      limit: 3,
      showTags: false,
      filter: (f) => f.frontmatter?.tags?.includes('intro') ? false : true,
      sort: (f1: QuartzPluginData, f2: QuartzPluginData) => {
        if (f1.frontmatter?.date && f2.frontmatter?.date) {
          // Sort by date
          if (f1.frontmatter?.date && f2.frontmatter?.date) {
            return f1.frontmatter.date < f2.frontmatter.date ? 1 : -1
          } else if (f1.frontmatter?.date && !f2.frontmatter?.date) {
            return -1
          } else if (!f1.frontmatter?.date && f2.frontmatter?.date) {
            return 1
          }

          const f1Title = f1.frontmatter?.title.toLowerCase() ?? ""
          const f2Title = f2.frontmatter?.title.toLowerCase() ?? ""
          return f1Title.localeCompare(f2Title)
        }
        return 0
      }
    })),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
