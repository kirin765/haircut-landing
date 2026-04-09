import Script from 'next/script';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': '노쇼 없는 미용실',
    'description': '미용실 예약 관리 SaaS - 자동 리마인드와 노쇼 관리',
    'url': 'https://noshowhair.com',
    'image': 'https://noshowhair.com/logo.png',
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Customer Service',
      'email': 'support@reviewboost.co.kr',
      'availableLanguage': ['Korean', 'English'],
    },
    'sameAs': [
      'https://www.facebook.com/noshowhair',
      'https://www.instagram.com/noshowhair',
      'https://www.kakao.com/noshowhair',
    ],
  };

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': '노쇼 없는 미용실',
    'description': '미용실의 예약 관리 문제를 해결하는 자동 리마인드·노쇼 관리 SaaS. 카카오톡, 문자 자동 발송으로 매출 손실을 줄이세요.',
    'url': 'https://noshowhair.com',
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'Web',
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'KRW',
      'offers': [
        {
          '@type': 'Offer',
          'name': 'Starter Plan',
          'price': '0',
          'priceCurrency': 'KRW',
          'url': 'https://noshowhair.com#pricing',
        },
        {
          '@type': 'Offer',
          'name': 'Pro Plan',
          'price': '29900',
          'priceCurrency': 'KRW',
          'url': 'https://noshowhair.com#pricing',
        },
        {
          '@type': 'Offer',
          'name': 'Enterprise Plan',
          'price': 'Contact for pricing',
          'priceCurrency': 'KRW',
          'url': 'https://noshowhair.com#pricing',
        },
      ],
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'ratingCount': '100',
    },
    'author': {
      '@type': 'Organization',
      'name': 'Haircut Landing Team',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': '계약 기간이 있나요?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '아니요, 언제든지 취소할 수 있습니다. 최소 계약 기간이 없습니다.',
        },
      },
      {
        '@type': 'Question',
        'name': '문자 발송 비용이 별도로 들나요?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '프로 플랜에는 월 500회 문자가 포함되어 있으며, 추가 발송은 건당 50원입니다.',
        },
      },
      {
        '@type': 'Question',
        'name': '스타터 플랜에서 프로 플랜으로 업그레이드할 수 있나요?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '네, 언제든지 업그레이드할 수 있으며 비례 배분으로 청구됩니다.',
        },
      },
      {
        '@type': 'Question',
        'name': '지점이 여러 개면 어떻게 하나요?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '엔터프라이즈 플랜이 적합합니다. 상담을 통해 맞춤 가격을 제공해 드립니다.',
        },
      },
    ],
  };

  return (
    <>
      {/* Organization Schema */}
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />

      {/* Software Application Schema */}
      <Script
        id="app-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        strategy="afterInteractive"
      />

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}
