import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import { wikiTemplates } from './src/templates/wiki-templates'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

console.log('Templates loaded:', Object.keys(wikiTemplates))

export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      titleSuffix: ' - Advanced Blockchain Security Wiki',
    },
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      slug: 'wiki',
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'subcategory', 'status', 'updatedAt'],
      },
      hooks: {
        beforeValidate: [
          async (args: any) => {
            console.log('=== BEFOREVALIDATE HOOK FIRED ===')
            console.log('Args:', Object.keys(args))

            const { data } = args
            if (!data) {
              console.log('No data in args')
              return data
            }

            console.log('Data keys:', Object.keys(data))
            console.log('Template value:', data.template)
            console.log('Content value:', data.content)

            // Auto-populate content from template when template is selected
            if (data.template && data.template !== '') {
              console.log('Template selected:', data.template)
              const template = wikiTemplates[data.template as keyof typeof wikiTemplates]

              if (template) {
                console.log('Template found! First 50 chars:', template.content.substring(0, 50))
                // Only populate if content is empty or just whitespace
                if (!data.content || data.content.trim() === '') {
                  console.log('>>> POPULATING CONTENT FROM TEMPLATE <<<')
                  data.content = template.content
                }
              } else {
                console.log('ERROR: Template NOT found in wikiTemplates')
              }
            } else {
              console.log('No template selected or template is empty')
            }

            return data
          },
        ],
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          admin: {
            description: 'URL-friendly version of the title',
          },
        },
        {
          name: 'template',
          type: 'select',
          admin: {
            description: 'Select a template to auto-populate the content field (optional)',
            position: 'sidebar',
          },
          options: [
            { label: 'None', value: '' },
            { label: 'Common Vulnerability', value: 'common-vulnerability' },
          ],
        },
        {
          name: 'category',
          type: 'select',
          required: true,
          options: [
            { label: 'Fundamentals', value: 'fundamentals' },
            { label: 'Smart Contract Security', value: 'smart-contract-security' },
            { label: 'Development Lifecycle', value: 'development-lifecycle' },
            { label: 'Testing and Analysis', value: 'testing-and-analysis' },
            { label: 'Auditing', value: 'auditing' },
            { label: 'DeFi Security', value: 'defi-security' },
            { label: 'Infrastructure Security', value: 'infrastructure-security' },
            { label: 'Operations and Response', value: 'operations-and-response' },
            { label: 'Tools and Resources', value: 'tools-and-resources' },
            { label: 'Standards and Compliance', value: 'standards-and-compliance' },
          ],
        },
        {
          name: 'subcategory',
          type: 'select',
          required: true,
          admin: {
            description: 'Select the subcategory for this article',
          },
          options: [
            // Fundamentals
            { label: 'Blockchain Architecture and Security Principles', value: 'blockchain-architecture' },
            { label: 'Cryptographic Foundations', value: 'cryptographic-foundations' },
            { label: 'Smart Contract Basics', value: 'smart-contract-basics' },
            { label: 'Threat Modeling for Blockchain', value: 'threat-modeling' },

            // Smart Contract Security
            { label: 'Common Vulnerabilities', value: 'common-vulnerabilities' },
            { label: 'Platform-Specific Security', value: 'platform-specific-security' },
            { label: 'Secure Design Patterns', value: 'secure-design-patterns' },
            { label: 'Upgradeability and Proxy Patterns', value: 'upgradeability-proxy-patterns' },

            // Development Lifecycle
            { label: 'Secure SDLC for Blockchain', value: 'secure-sdlc' },
            { label: 'DevSecOps Practices', value: 'devsecops-practices' },
            { label: 'Security Requirements and Specifications', value: 'security-requirements' },
            { label: 'Secure Coding Standards', value: 'secure-coding-standards' },

            // Testing and Analysis
            { label: 'Static Analysis', value: 'static-analysis' },
            { label: 'Dynamic Analysis and Fuzzing', value: 'dynamic-analysis-fuzzing' },
            { label: 'Formal Verification', value: 'formal-verification' },
            { label: 'Security Testing Frameworks', value: 'security-testing-frameworks' },

            // Auditing
            { label: 'Audit Process and Methodologies', value: 'audit-process-methodologies' },
            { label: 'Manual Review Techniques', value: 'manual-review-techniques' },
            { label: 'Audit Reports and Findings', value: 'audit-reports-findings' },
            { label: 'Pre-audit and Post-audit Checklists', value: 'pre-post-audit-checklists' },

            // DeFi Security
            { label: 'Protocol-Specific Risks', value: 'protocol-specific-risks' },
            { label: 'Oracle Security', value: 'oracle-security' },
            { label: 'Flash Loan Attacks', value: 'flash-loan-attacks' },
            { label: 'Economic Exploits and MEV', value: 'economic-exploits-mev' },

            // Infrastructure Security
            { label: 'Node Security', value: 'node-security' },
            { label: 'Key Management and Wallets', value: 'key-management-wallets' },
            { label: 'Bridge and Cross-chain Security', value: 'bridge-crosschain-security' },
            { label: 'Off-chain Components', value: 'offchain-components' },

            // Operations and Response
            { label: 'Monitoring and Detection', value: 'monitoring-detection' },
            { label: 'Incident Response', value: 'incident-response' },
            { label: 'Bug Bounties', value: 'bug-bounties' },
            { label: 'Governance and Emergency Procedures', value: 'governance-emergency-procedures' },

            // Tools and Resources
            { label: 'Analysis Tools', value: 'analysis-tools' },
            { label: 'Testing Frameworks', value: 'testing-frameworks' },
            { label: 'Development Environments', value: 'development-environments' },
            { label: 'Security Libraries', value: 'security-libraries' },

            // Standards and Compliance
            { label: 'Security Standards', value: 'security-standards' },
            { label: 'Regulatory Considerations', value: 'regulatory-considerations' },
            { label: 'Best Practices and Guidelines', value: 'best-practices-guidelines' },
          ],
        },
        {
          name: 'excerpt',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Short description for SEO and previews',
          },
        },
        {
          name: 'content',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Article content (supports markdown)',
            rows: 20,
          },
        },
        {
          name: 'tags',
          type: 'array',
          fields: [
            {
              name: 'tag',
              type: 'text',
            },
          ],
        },
        {
          name: 'difficulty',
          type: 'select',
          options: [
            { label: 'Beginner', value: 'beginner' },
            { label: 'Intermediate', value: 'intermediate' },
            { label: 'Advanced', value: 'advanced' },
            { label: 'Expert', value: 'expert' },
          ],
          defaultValue: 'intermediate',
        },
        {
          name: 'readTime',
          type: 'number',
          admin: {
            description: 'Estimated reading time in minutes',
          },
        },
        {
          name: 'author',
          type: 'text',
          defaultValue: 'Advanced Blockchain Security Team',
        },
        {
          name: 'status',
          type: 'select',
          required: true,
          defaultValue: 'draft',
          options: [
            { label: 'Draft', value: 'draft' },
            { label: 'Published', value: 'published' },
          ],
        },
      ],
    },
    {
      slug: 'contact-submissions',
      admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'company', 'status', 'submittedAt'],
        description: 'Contact form submissions from the website',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          type: 'email',
          required: true,
        },
        {
          name: 'company',
          type: 'text',
        },
        {
          name: 'message',
          type: 'textarea',
          required: true,
        },
        {
          name: 'status',
          type: 'select',
          required: true,
          defaultValue: 'new',
          options: [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'in-progress' },
            { label: 'Responded', value: 'responded' },
            { label: 'Closed', value: 'closed' },
          ],
        },
        {
          name: 'submittedAt',
          type: 'date',
          required: true,
          admin: {
            description: 'When the form was submitted',
          },
        },
      ],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key-here',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/abs-wiki',
  }),
})
