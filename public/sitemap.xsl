<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap | Emirates Secretarial Services (ESS) - ess.ae</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background: #f8fafc;
            color: #1e293b;
            line-height: 1.5;
            padding: 24px;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03);
            border: 1px solid #e2e8f0;
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #01403f 0%, #085c5e 50%, #128b94 100%);
            color: #ffffff;
            padding: 36px 32px;
          }
          .badge-gov {
            display: inline-block;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(8px);
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.5px;
            margin-bottom: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          .header h1 {
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 8px;
            letter-spacing: -0.5px;
          }
          .header p {
            font-size: 14px;
            color: #ccfbf1;
            max-width: 800px;
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            padding: 24px 32px;
            background: #f1f5f9;
            border-bottom: 1px solid #e2e8f0;
          }
          .stat-card {
            background: #ffffff;
            padding: 16px 20px;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
          }
          .stat-label {
            font-size: 11px;
            font-weight: 700;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .stat-value {
            font-size: 22px;
            font-weight: 800;
            color: #0f766e;
            margin-top: 4px;
          }
          .controls {
            padding: 20px 32px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            background: #ffffff;
            border-bottom: 1px solid #e2e8f0;
          }
          .search-box {
            flex: 1;
            min-width: 260px;
            max-width: 450px;
            position: relative;
          }
          .search-input {
            width: 100%;
            padding: 10px 16px;
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            font-size: 13px;
            outline: none;
            transition: all 0.2s;
          }
          .search-input:focus {
            border-color: #128b94;
            box-shadow: 0 0 0 3px rgba(18, 139, 148, 0.15);
          }
          .info-note {
            font-size: 12px;
            color: #64748b;
          }
          .table-wrapper {
            overflow-x: auto;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 13px;
          }
          thead {
            background: #f8fafc;
            border-bottom: 2px solid #e2e8f0;
          }
          th {
            padding: 12px 20px;
            font-weight: 700;
            color: #475569;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          tbody tr {
            border-bottom: 1px solid #f1f5f9;
            transition: background 0.15s;
          }
          tbody tr:hover {
            background: #f0fdfa;
          }
          td {
            padding: 14px 20px;
            color: #334155;
            vertical-align: middle;
          }
          .col-index {
            width: 50px;
            color: #94a3b8;
            font-weight: 600;
            font-size: 12px;
          }
          .url-link {
            color: #0f766e;
            text-decoration: none;
            font-weight: 600;
            word-break: break-all;
          }
          .url-link:hover {
            color: #115e59;
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 700;
            text-align: center;
          }
          .badge-daily { background: #dcfce7; color: #15803d; }
          .badge-weekly { background: #e0f2fe; color: #0369a1; }
          .badge-monthly { background: #f1f5f9; color: #475569; }
          .badge-p10 { background: #fef3c7; color: #b45309; }
          .badge-p09 { background: #ccfbf1; color: #0f766e; }
          .badge-p08 { background: #e2e8f0; color: #334155; }
          .badge-p07 { background: #f8fafc; color: #64748b; }
          .footer {
            padding: 24px 32px;
            background: #f8fafc;
            border-top: 1px solid #e2e8f0;
            font-size: 12px;
            color: #64748b;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
          }
          .footer a {
            color: #0f766e;
            text-decoration: none;
            font-weight: 600;
          }
          .footer a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="badge-gov">OFFICIAL XML SITEMAP · GOOGLE COMPLIANT</span>
            <h1>Emirates Secretarial Services (ESS)</h1>
            <p>
              This is the official search engine XML sitemap for <strong>https://ess.ae</strong>, structured according to Sitemaps.org and Google Search Console standards. It provides search engine spiders with an indexed register of all government departments, services, and regulatory guides.
            </p>
          </div>

          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-label">Total Indexed URLs</div>
              <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Protocol</div>
              <div class="stat-value" style="font-size: 18px;">sitemaps.org / 0.9</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Canonical Domain</div>
              <div class="stat-value" style="font-size: 18px;">https://ess.ae</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Target Engine</div>
              <div class="stat-value" style="font-size: 18px;">Google / Bing / Yandex</div>
            </div>
          </div>

          <div class="controls">
            <div class="search-box">
              <input type="text" id="sitemapFilter" class="search-input" placeholder="Filter URLs (e.g. /service/, /department/, /knowledge-hub/)..." onkeyup="filterSitemapTable()" />
            </div>
            <div class="info-note">
              Click any URL below to visit the live page on <strong>ess.ae</strong>
            </div>
          </div>

          <div class="table-wrapper">
            <table id="sitemapTable">
              <thead>
                <tr>
                  <th class="col-index">#</th>
                  <th>URL / Location</th>
                  <th style="width: 140px;">Change Freq</th>
                  <th style="width: 110px;">Priority</th>
                  <th style="width: 130px;">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td class="col-index"><xsl:value-of select="position()"/></td>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}" class="url-link" target="_blank" rel="noopener noreferrer">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="sitemap:changefreq = 'daily'">
                          <span class="badge badge-daily">daily</span>
                        </xsl:when>
                        <xsl:when test="sitemap:changefreq = 'weekly'">
                          <span class="badge badge-weekly">weekly</span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="badge badge-monthly"><xsl:value-of select="sitemap:changefreq"/></span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="sitemap:priority = '1.0'">
                          <span class="badge badge-p10">1.0 (Top)</span>
                        </xsl:when>
                        <xsl:when test="sitemap:priority = '0.9' or sitemap:priority = '0.85'">
                          <span class="badge badge-p09"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="badge badge-p08"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <div class="footer">
            <div>
              Generated for <strong>Emirates Secretarial Services LLC (ESS)</strong> · Karama Business Center
            </div>
            <div>
              <a href="https://ess.ae/">Return to Home</a> · 
              <a href="https://ess.ae/robots.txt">robots.txt</a> · 
              <a href="https://ess.ae/knowledge-hub">Knowledge Hub</a>
            </div>
          </div>
        </div>

        <script type="text/javascript">
          function filterSitemapTable() {
            var input = document.getElementById("sitemapFilter");
            var filter = input.value.toLowerCase();
            var table = document.getElementById("sitemapTable");
            var trs = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

            for (var i = 0; i &lt; trs.length; i++) {
              var td = trs[i].getElementsByTagName("td")[1];
              if (td) {
                var textValue = td.textContent || td.innerText;
                if (textValue.toLowerCase().indexOf(filter) &gt; -1) {
                  trs[i].style.display = "";
                } else {
                  trs[i].style.display = "none";
                }
              }
            }
          }
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
