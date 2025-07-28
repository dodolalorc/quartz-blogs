import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

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
    Component.DesktopOnly(Component.RecentNotes({ limit: 3, showTags: false })),
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
