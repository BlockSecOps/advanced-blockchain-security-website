'use client'

import React, { useEffect, useState } from 'react'
import { useFormFields } from '@payloadcms/ui'
import { SelectInput } from '@payloadcms/ui'

// Define subcategory mapping
const subcategoryOptions: Record<string, Array<{ label: string; value: string }>> = {
  'fundamentals': [
    { label: 'Blockchain Architecture and Security Principles', value: 'blockchain-architecture' },
    { label: 'Cryptographic Foundations', value: 'cryptographic-foundations' },
    { label: 'Smart Contract Basics', value: 'smart-contract-basics' },
    { label: 'Threat Modeling for Blockchain', value: 'threat-modeling' },
  ],
  'smart-contract-security': [
    { label: 'Common Vulnerabilities', value: 'common-vulnerabilities' },
    { label: 'Platform-Specific Security', value: 'platform-specific-security' },
    { label: 'Secure Design Patterns', value: 'secure-design-patterns' },
    { label: 'Upgradeability and Proxy Patterns', value: 'upgradeability-proxy-patterns' },
  ],
  'development-lifecycle': [
    { label: 'Secure SDLC for Blockchain', value: 'secure-sdlc' },
    { label: 'DevSecOps Practices', value: 'devsecops-practices' },
    { label: 'Security Requirements and Specifications', value: 'security-requirements' },
    { label: 'Secure Coding Standards', value: 'secure-coding-standards' },
  ],
  'testing-and-analysis': [
    { label: 'Static Analysis', value: 'static-analysis' },
    { label: 'Dynamic Analysis and Fuzzing', value: 'dynamic-analysis-fuzzing' },
    { label: 'Formal Verification', value: 'formal-verification' },
    { label: 'Security Testing Frameworks', value: 'security-testing-frameworks' },
  ],
  'auditing': [
    { label: 'Audit Process and Methodologies', value: 'audit-process-methodologies' },
    { label: 'Manual Review Techniques', value: 'manual-review-techniques' },
    { label: 'Audit Reports and Findings', value: 'audit-reports-findings' },
    { label: 'Pre-audit and Post-audit Checklists', value: 'pre-post-audit-checklists' },
  ],
  'defi-security': [
    { label: 'Protocol-Specific Risks', value: 'protocol-specific-risks' },
    { label: 'Oracle Security', value: 'oracle-security' },
    { label: 'Flash Loan Attacks', value: 'flash-loan-attacks' },
    { label: 'Economic Exploits and MEV', value: 'economic-exploits-mev' },
  ],
  'infrastructure-security': [
    { label: 'Node Security', value: 'node-security' },
    { label: 'Key Management and Wallets', value: 'key-management-wallets' },
    { label: 'Bridge and Cross-chain Security', value: 'bridge-crosschain-security' },
    { label: 'Off-chain Components', value: 'offchain-components' },
  ],
  'operations-and-response': [
    { label: 'Monitoring and Detection', value: 'monitoring-detection' },
    { label: 'Incident Response', value: 'incident-response' },
    { label: 'Bug Bounties', value: 'bug-bounties' },
    { label: 'Governance and Emergency Procedures', value: 'governance-emergency-procedures' },
  ],
  'tools-and-resources': [
    { label: 'Analysis Tools', value: 'analysis-tools' },
    { label: 'Testing Frameworks', value: 'testing-frameworks' },
    { label: 'Development Environments', value: 'development-environments' },
    { label: 'Security Libraries', value: 'security-libraries' },
  ],
  'standards-and-compliance': [
    { label: 'Security Standards', value: 'security-standards' },
    { label: 'Regulatory Considerations', value: 'regulatory-considerations' },
    { label: 'Best Practices and Guidelines', value: 'best-practices-guidelines' },
  ],
}

export const ConditionalSubcategorySelect: React.FC<any> = (props) => {
  const { path, required } = props
  const category = useFormFields(([fields]) => fields?.category?.value as string)
  const subcategory = useFormFields(([fields]) => fields?.subcategory?.value as string)

  const [filteredOptions, setFilteredOptions] = useState<Array<{ label: string; value: string }>>([])

  useEffect(() => {
    if (category && subcategoryOptions[category]) {
      setFilteredOptions(subcategoryOptions[category])
    } else {
      setFilteredOptions([])
    }
  }, [category])

  if (!category) {
    return (
      <div className="field-type select">
        <label className="field-label">
          Subcategory
          {required && <span className="required">*</span>}
        </label>
        <div style={{ padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px', color: '#666' }}>
          Please select a category first
        </div>
      </div>
    )
  }

  return (
    <SelectInput
      {...props}
      path={path}
      name="subcategory"
      label="Subcategory"
      required={required}
      options={filteredOptions}
    />
  )
}
